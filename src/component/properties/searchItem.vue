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
        <option value="appartment">appartment</option>
        <option value="villa">villa</option>
        <option value="room">room</option>
      </select>
    </li>

    <li>
      <h6>Floor</h6>
      <select
        v-model="floor"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="ground">Ground Floor</option>
        <option value="upper">Upper Floor</option>
        <option value="frist">Frist Floor</option>
        <option value="second">Second Floor</option>
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
      </select>
    </li>
    <li>
      <h6>Finishing</h6>
      <select
        v-model="finishing"
        class="form-select shadow-none"
        aria-label="Default select example"
      >
        <option value="finishing1">Finishing1</option>
        <option value="finishing2">Finishing2</option>
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
        <option value="wise">wise</option>
      </select>
    </li>
    <li>
      <h6>Delivery Date</h6>
      <div class="mb-3">
        <input
          type="date"
          class="form-control shadow-none"
          id="exampleInputdate1"
          aria-describedby="dateHelp"
        />
      </div>
    </li>
  </ul>
  <div>
    <price-range></price-range>
  </div>
  <div class="d-flex justify-content-between align-items-center mt-2">
    <custom-button
      text="Reset"
      btnClass="resetBtn"
      @click="reserSearch"
    ></custom-button>
    <custom-button
      text="Search"
      btnClass="searchBtn"
      @click="itemSearch"
    ></custom-button>
  </div>
</template>
<script>
import PriceRange from './priceRange.vue';
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
      finishing: '',
      view: '',
      payment: '',
    };
  },
  components: {
    CustomButton,
    PriceRange,
  },
  methods: {
    itemSearch() {
      let arr = [];
      if (this.category !== '')
        arr.push({ key: 'category', value: this.category });
      if (this.location !== '')
        arr.push({ key: 'location', value: this.location });
      if (this.type !== '') arr.push({ key: 'propType', value: this.type });
      if (this.floor !== '') arr.push({ key: 'floor', value: this.floor });
      if (this.view !== '') arr.push({ key: 'view', value: this.view });
      if (this.finishing !== '')
        arr.push({ key: 'finishing', value: this.finishing });
      if (this.payment !== '')
        arr.push({ key: 'payment', value: this.payment });
      this.$store.dispatch('propFl/itemSearch', arr);
      // this.$store.dispatch('propFl/filterItems', 1);
    },
    reserSearch() {
      this.category = '';
      this.location = '';
      this.type = '';
      this.floor = '';
      this.view = '';
      this.finishing = '';
      this.payment = '';
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
    position: relative;
    &:after {
      content: 'ww';
      position: absolute;
      background-color: red;
      width: 10px;
      height: 10px;
      left: 0;
      right: 0;
    }
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
  input[type='date']::-webkit-calendar-picker-indicator {
    background-image: url('./../../assets/images/properties/calendar.svg');
  }
}
</style>
