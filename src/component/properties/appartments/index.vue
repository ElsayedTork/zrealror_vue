<template>
  <price-search></price-search>
  <div>
    <single-appartment></single-appartment>
  </div>
</template>
<script>
import PriceSearch from './priceSearch/index.vue';
import SingleAppartment from './singleAppartment/index.vue';
export default {
  components: {
    PriceSearch,
    SingleAppartment,
  },
};
</script>
<style lang="scss" scoped></style>
