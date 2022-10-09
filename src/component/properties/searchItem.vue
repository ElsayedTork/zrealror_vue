<template>
  <ul>
    <li>
      <h6>Property Category</h6>
      <select
        v-model="category"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="5 star">5 star</option>
        <option value="4 star">4 star</option>
        <option value="3 star">3 start</option>
      </select>
    </li>

    <li>
      <h6>Property Location</h6>
      <select
        v-model="location"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="cairo">Cairo</option>
        <option value="alex">Alex</option>
        <option value="tanta">tanta</option>
      </select>
    </li>

    <li>
      <h6>Property Type</h6>
      <select
        v-model="type"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="appartment">Appartment</option>
        <option value="villa">Villa</option>
        <option value="room">Room</option>
      </select>
    </li>

    <li>
      <h6>Floor</h6>
      <select
        v-model="floor"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="Ground">Ground Floor</option>
        <option value="Upper">Upper Floor</option>
        <option value="Frist">Frist Floor</option>
      </select>
    </li>
  </ul>
  <div>
    <label for="customRange3" class="form-label">Example range</label>
    <input
      type="range"
      class="form-range"
      min="0"
      max="5"
      step="0.5"
      id="customRange3"
    />
  </div>
  <ul>
    <li>
      <h6>View</h6>
      <select
        v-model="view"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="pool">pool</option>
        <option value="garden">garden</option>
        <option value="sea">sea</option>
      </select>
    </li>
    <li>
      <h6>Finishing</h6>
      <select
        v-model="finishing"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="cairo1">cairo1</option>
        <option value="cairo2">cairo2</option>
        <option value="cairo3">cairo3</option>
      </select>
    </li>
    <li>
      <h6>Payment Methods</h6>
      <select
        v-model="payment"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="paypal">paypal</option>
        <option value="visa">visa</option>
        <option value="wise">wise</option>
      </select>
    </li>
  </ul>
  <div class="d-flex justify-content-between align-items-center mt-2">
    <custom-button text="Reset" btnClass="resetBtn"></custom-button>
    <custom-button
      text="Search"
      btnClass="searchBtn"
      @click="itemSearch"
    ></custom-button>
  </div>
</template>
<script>
import CustomButton from './../shared/customButton/index.vue';
export default {
  props: ['dataName'],
  data() {
    return {
      propSearch:
        this.dataName == 'propSearch'
          ? this.$store.state.propSearch
          : this.$store.state.propData,
      category: '',
      location: '',
      type: '',
      floor: '',
      view: '',
      payment: '',
    };
  },
  components: {
    CustomButton,
  },
  methods: {
    itemSearch() {
      if (this.location !== '' && this.category == '' && this.type == '') {
        this.$store.dispatch('propFl/itemSearch', this.location);
      } else if (
        this.location == '' &&
        this.category !== '' &&
        this.type == ''
      ) {
        this.$store.dispatch('propFl/itemSearch', this.category);
      } else if (
        this.location == '' &&
        this.category == '' &&
        this.type !== ''
      ) {
        this.$store.dispatch('propFl/itemSearch', this.type);
      } 
      else if (this.location !== '' && this.category !== '') {
        this.$store.dispatch('propFl/categoryLocation', [
          this.category,
          this.location,
        ]);
      }
      else if (this.location !== '' && this.category !== '') {
        this.$store.dispatch('propFl/categoryType', [
          this.category,
          this.type,
        ]);
      }
      else if (this.location !== '' && this.type !== '') {
        this.$store.dispatch('propFl/locationType', [
          this.location,
          this.type,
        ]);
      }
      

      // console.log(this.category, this.location, this.type, this.floor);
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  padding-block-start: 24px;
  h6 {
    font-size: 1rem;
    color: var(--text-color-secondary);
    font-weight: 500;
  }
  .form-select {
    width: 100%;
    border-color: transparent;
    text-align: left;
    background-image: url('./../../assets/images/properties/Shape.svg'),
      linear-gradient(to right, #f6f7f9, #ffffff);
    background-size: 9px 9px;
    color: var(--placeholder-color);
    border: 1px solid var(--border-color);
    font-weight: 500;
    font-size: 0.875rem;
  }
  .dropdown-toggle {
    width: 100%;
    border-color: transparent;
    text-align: left;
    background-image: linear-gradient(to right, #f6f7f9, #ffffff);
    color: var(--placeholder-color);
    border: 1px solid var(--border-color);
    font-weight: 500;
    font-size: 0.875rem;
    &::after {
      display: none;
    }
  }
}
</style>
