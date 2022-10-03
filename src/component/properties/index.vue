<template>
  <price-search @view-list="viewList" @view-grid="viewGrid"></price-search>
  <div>
    <component :is="appartmentValue" />
  </div>
</template>
<script>
import PriceSearch from './priceSearch.vue';
import SingleAppartment from './singleAppartment.vue';
import GridAppartment from './gridAppartment.vue';
export default {
  data() {
    return {
      appartmentValue: 'SingleAppartment',
    };
  },
  components: {
    PriceSearch,
    SingleAppartment,
    GridAppartment,
  },
  methods: {
    viewList(el) {
      this.appartmentValue = el;
    },
    viewGrid(el) {
      this.appartmentValue = el;
    },
  },
};
</script>
<style lang="scss" scoped></style>
