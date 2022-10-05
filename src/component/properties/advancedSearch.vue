<template>
  <div class="search">
    <h4>Advanced Search</h4>
    <div class="search__filter">
      <section class="search__filter__data">
        <search-item dataName="propSearch"></search-item>
        <div>
          <label for="customRange3" class="form-label">Example range</label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />
        </div>
        <search-item dataName="propData"></search-item>
      </section>

      <section class="search__filter__btns">
        <div class="d-flex justify-content-between align-items-center">
          <custom-button text="Reset" btnClass="resetBtn"></custom-button>
          <custom-button text="Search" btnClass="searchBtn"></custom-button>
        </div>
        <div>
          <custom-button
            text="Save Search"
            btnClass="saveSearch"
          ></custom-button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import SearchItem from './searchItem.vue';
import CustomButton from '../shared/customButton/index.vue';

export default {
  data() {
    return {};
  },
  components: {
    CustomButton,
    SearchItem,
  },
};
</script>
<style lang="scss" scoped>
.search {
  border-radius: 8px;

  h4 {
    font-size: 1.25rem;
    color: var(--text-color-secondary);
    font-weight: 700;
    background-color: var(--heading-color);
    padding-inline-start: 20px;
    padding-block: 14px;
  }
  &__filter {
    padding-inline: 20px;
    background-color: var(--white-color) !important;
    padding-block-end: 40px;
    &__btns {
      margin-block-start: 48px;
      .resetBtn {
        color: var(--text-gray-color);
        background-color: var(--resetBtn-color);
        border-color: transparent;
        width: 50%;
        display: inline-block;
        margin-inline-end: 6px;
      }
      .searchBtn {
        color: var(--white-color);
        background-color: var(--main-color);
        border-color: transparent;
        width: 50%;
        display: inline-block;
        margin-inline-start: 10px;
      }
    }
  }
}
</style>
