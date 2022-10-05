<template>
  <price-search @view-list="viewList" @view-grid="viewGrid"></price-search>
  <div>
    <component :is="appartmentValue" />
  </div>
  <paganation-items></paganation-items>
</template>
<script>
import PriceSearch from './priceSearch.vue';
import SingleAppartment from './singleAppartment.vue';
import GridAppartment from './gridAppartment.vue';
import PaganationItems from './paganationItems.vue';
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
    PaganationItems,
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

