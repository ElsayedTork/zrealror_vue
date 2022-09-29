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

      <section
        class="search__filter__btns d-flex justify-content-between align-items-center"
      >
        <custom-button text="Reset" btnClass="resetBtn"></custom-button>
        <custom-button text="Search" btnClass="searchBtn"></custom-button>
      </section>
    </div>
    <div class="mt-3">
      <figure
        class="advertisment d-flex justify-content-center align-items-center"
      >
        <img src="./../../../assets/images/adds/addpropstartUp.png" alt="" />
      </figure>
    </div>
    <div class="mt-3">
      <figure
        class="advertisment d-flex justify-content-center align-items-center"
      >
        <img src="./../../../assets/images/adds/addpropstart.png" alt="" />
      </figure>
    </div>
  </div>
</template>
<script>
import SearchItem from './../searchItem/index.vue';
import CustomButton from './../../shared/customButton/index.vue';

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
    background-color: #eef2f3;
    padding-inline-start: 20px;
    padding-block: 14px;
  }
  &__filter {
    padding-inline: 20px;
    background-color: var(--white-color) !important;
    padding-block-end: 40px;
    &__btns {
      margin-block-start: 3rem;
      .resetBtn {
        color: #737680;
        background-color: #ececec;
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
