<template>
  <price-search></price-search>
  <div>
    <single-appartment></single-appartment>
  </div>
</template>
<script>
import PriceSearch from './priceSearch.vue';
import SingleAppartment from './singleAppartment.vue';
export default {
  components: {
    PriceSearch,
    SingleAppartment,
  },
};
</script>
<style lang="scss" scoped></style>
