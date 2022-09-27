<template>
  <ul>
    <li v-for="item in propSearch" :key="item.id">
      <h6>{{ item.title }}</h6>
      <div class="dropdown">
        <button
          class="dropdown-toggle d-flex justify-content-between align-items-center"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>{{ item.options[0] }}</span>
          <img src="./../../../assets/images/properties/Shape.png" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="(ele, index) in item.options" :key="index">
            <a class="dropdown-item" href="#">{{ ele }}</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['dataName'],
  data() {
    return {
      // propCategory: this.$store.state.propCategory,
      // options: this.$store.state.propCategory.options,
      propSearch:
        this.dataName == 'propSearch'
          ? this.$store.state.propSearch
          : this.$store.state.propData,
    };
  },
  created() {
    console.log('dataName', this.dataName);
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  padding-block-start: 24px;
  h6 {
    font-size: 1rem;
    color: var(--text-color-secondary);
    font-weight: 500;
  }
  .dropdown-toggle {
    width: 100%;
    border-color: transparent;
    text-align: left;
    background-image: linear-gradient(to right, #f6f7f9, #ffffff);
    color: var(--placeholder-color);
    border: 1px solid var(--border-color);
    font-weight: 500;
    font-size: 0.875rem;
    &::after {
      display: none;
    }
  }
}
</style>
