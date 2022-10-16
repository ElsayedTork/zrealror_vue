<template>
  <div class="properties">
    <div class="container">
      <div class="properties__breadcrumb">
        <router-link to="/" class="me-2">Home</router-link>
        <i class="fa-solid fa-chevron-right"></i>
        <i class="fa-solid fa-chevron-right"></i>
        <span class="ms-2">Properties </span>
      </div>
      <div class="row">
        <div class="col-xl-3">
          <advanced-search></advanced-search>
        </div>
        <div class="col-xl-9">
          <appartments />
          <img
            class="properties__propAdd img-fluid"
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
  &__breadcrumb {
    padding-block-start: 40px;
    margin-block-end: 46px;
    a {
      color: var(--range-color);
      font-weight: 600;
      margin-block-end: 10px;
      display: inline-block;
    }
    span {
      color: var(--text-gray-color);
      margin-block-start: 10px;
      display: inline-block;
    }
    i {
      font-size: 12px;
      color: var(--text-gray-color);
    }
  }
}
.properties__propAdd {
  margin-block-start: 48px;
}
</style>
