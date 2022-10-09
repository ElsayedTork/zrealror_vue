<template>
  <div class="search">
    <h4>Advanced Search</h4>
    <div class="search__filter">
      <section class="search__filter__data">
        <search-item dataName="propSearch"></search-item>
      </section>

      <section class="search__filter__btns">
        <div @click="showModal">
          <custom-button
            text="Save Search"
            btnClass="saveSearch"
          ></custom-button>
        </div>
      </section>
    </div>
  </div>

  <!-- Start Test -->
  <section v-if="flag">
    <prop-modal @close-modal="closeModal"></prop-modal>
  </section>

  <!-- End Test -->
</template>
<script>
import SearchItem from './searchItem.vue';
import CustomButton from '../shared/customButton/index.vue';
import PropModal from './propModal.vue';
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    CustomButton,
    SearchItem,
    PropModal,
  },
  methods: {
    showModal() {
      this.flag = true;
    },
    closeModal() {
      this.flag = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  border-radius: 8px;
  margin-block-start: 92px;

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
    }
  }
}
</style>
