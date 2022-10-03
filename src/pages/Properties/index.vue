<template>
  <div class="properties">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <advanced-search></advanced-search>
        </div>
        <div class="col-md-9">
          <Appartments />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdvancedSearch from '../../component/properties/advancedSearch.vue';
import Appartments from '../../component/properties/index.vue';
export default {
  components: {
    AdvancedSearch,
    Appartments,
  },
};
</script>
<style lang="scss" scoped>
.properties {
  background-color: var(--background-color);
  padding-block: 80px;
}
</style>
