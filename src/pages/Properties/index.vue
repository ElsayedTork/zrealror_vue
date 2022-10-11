<template>
  <div class="properties">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <advanced-search></advanced-search>
        </div>
        <div class="col-xl-9">
          <appartments />
          <img
            class="properties__propAdd"
            src="./../../assets/images/properties/propAdd.png"
            alt=""
          />
          <div>
            <feature-prop></feature-prop>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdvancedSearch from '../../component/properties/advancedSearch.vue';
import appartments from '../../component/properties/index.vue';
import FeatureProp from './../../component/properties/featureProp.vue';
export default {
  components: {
    AdvancedSearch,
    appartments,
    FeatureProp,
  },
};
</script>
<style lang="scss" scoped>
.properties {
  background-color: var(--background-color);
  padding-block: 80px;
}
.properties__propAdd {
  margin-block-start: 48px;
}
</style>
