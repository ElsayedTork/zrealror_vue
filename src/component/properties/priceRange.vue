<template>
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
</template>

<script>
import Slider from '@vueform/slider';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [6500, 15000],
      valueArea: [0, 290],
      valueBedrooms: [1, 5],
      valueBathroom: [1, 3],
      tooltips: true,
    };
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
.range {
  padding-block: 28px;
  &__header {
    padding-block-end: 12px;
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
