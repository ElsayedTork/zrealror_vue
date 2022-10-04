<template>
  <div class="properties">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <advanced-search></advanced-search>
        </div>
        <div class="col-xl-9">
          <appartments />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdvancedSearch from '../../component/properties/advancedSearch.vue';
import appartments from '../../component/properties/index.vue';
export default {
  components: {
    AdvancedSearch,
    appartments,
  },
};
</script>
<style lang="scss" scoped>
.properties {
  background-color: var(--background-color);
  padding-block: 80px;
}
</style>
