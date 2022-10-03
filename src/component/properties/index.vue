<template>
  <price-search></price-search>
  <div>
    <component :is="appartmentValue" />
  </div>
  <div></div>
</template>
<script>
import PriceSearch from './priceSearch.vue';
import SingleAppartment from './singleAppartment.vue';
import GridAppartment from './gridAppartment.vue';
export default {
  data() {
    return {
      appartmentValue: 'GridAppartment',
    };
  },
  components: {
    PriceSearch,
    SingleAppartment,
    GridAppartment,
  },
};
</script>
<style lang="scss" scoped></style>
