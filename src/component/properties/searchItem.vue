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
    <div class="range">
      <div
        class="range__header d-flex justify-content-between align-items-sm-center"
      >
        <p>Price Range</p>
        <p>{{ value[0] }} - {{ value[1] }} $</p>
      </div>
      <Slider v-model="value" :min="0" :max="20000" />
    </div>
    <div class="range">
      <div
        class="range__header d-flex justify-content-between align-items-sm-center"
      >
        <p>Area</p>
        <p>{{ valueArea[0] }} - {{ valueArea[1] }} Sqrt</p>
      </div>
      <Slider v-model="valueArea" :min="0" :max="600" />
    </div>
    <div class="range">
      <div
        class="range__header d-flex justify-content-between align-items-sm-center"
      >
        <p>Bedrooms</p>
        <p>{{ valueBedrooms[0] }} - {{ valueBedrooms[1] }}</p>
      </div>
      <Slider v-model="valueBedrooms" :min="1" :max="10" />
    </div>
    <div class="range">
      <div
        class="range__header d-flex justify-content-between align-items-sm-center"
      >
        <p>Bathroom</p>
        <p>{{ valueBathroom[0] }} - {{ valueBathroom[1] }}</p>
      </div>
      <Slider v-model="valueBathroom" :min="1" :max="10" />
    </div>
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
import CustomButton from './../shared/customButton/index.vue';
import Slider from '@vueform/slider';
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
      value: [100, 15000],
      valueArea: [1, 550],
      valueBedrooms: [1, 8],
      valueBathroom: [1, 8],
      tooltips: true,
    };
  },
  components: {
    CustomButton,
    Slider,
  },
  methods: {
    itemSearch() {
      let arr = [];
      arr.push({ key: 'value', value: this.value });
      arr.push({ key: 'valueArea', value: this.valueArea });
      arr.push({ key: 'valueBedrooms', value: this.valueBedrooms });
      arr.push({ key: 'valueBathroom', value: this.valueBathroom });
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
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
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
.range {
  padding-block: 28px;
  &__header {
    padding-block-end: 12px;
    p {
      &:first-child {
        color: var(--text-color-secondary);
        font-weight: 500;
        font-size: 14px;
      }
      &:last-child {
        color: var(--rang-color);
        font-weight: 500;
        font-size: 12px;
      }
    }
  }
  .slider-touch-area {
    background-color: #fff;
    border: 4px solid var(--main-color);
    border-radius: 50%;
    // position: relative;
  }
  .slider-connects {
    .slider-connect {
      background-color: var(--main-color);
    }
  }

  .slider-horizontal .slider-tooltip-top {
    bottom: -30px !important;
    left: 50%;
    transform: translate(-50%);
    &::before {
      content: none;
    }
    background-color: var(--main-color);
    border-color: transparent;
    opacity: 0;
    transition: opacity 0.5s;
  }
  &:hover {
    .slider-horizontal .slider-tooltip-top {
      opacity: 1;
    }
  }
}
</style>
