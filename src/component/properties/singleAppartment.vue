<template>
  <section class="apartment">
    <section :v-if="grid === true">
      <div
        class="apartment__element row"
        v-for="item in propInformations"
        :key="item.id"
      >
        <div class="col-sm-12">
          <div class="row">
            <div class="col-md-4">
              <apartment-slider></apartment-slider>
            </div>
            <div class="col-md-8">
              <apartment-item :item="item"></apartment-item>
            </div>
          </div>
        </div>
        <span class="apartment__element__discound">50% OFF</span>
      </div>
    </section>
  </section>
</template>
<script>
import ApartmentSlider from './apartmentSlider.vue';
import ApartmentItem from './apartmentItem.vue';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      grid: false,
    };
  },
  components: {
    ApartmentSlider,
    ApartmentItem,
  },

  computed: {
    ...mapState({
      propInformations: (state) => {
        return state.propInformations;
      },
    }),
  },
};
</script>
<style scopd lang="scss" scoped>
.apartment {
  margin-block-start: 20px;
  &__element {
    border-radius: 20px;
    padding-block: 15px;
    margin-block-end: 20px;
    background-color: var(--white-color);
    padding-inline-start: 2px;
    position: relative;
    &__discound {
      position: absolute;
      right: 0;
      top: 80px;
      background-color: var(--discound_color);
      color: var(--white-color);
      display: inline;
      width: fit-content;
      padding-inline: 8px;
      padding-block: 4px;
      border-radius: 8px 0 0 8px;
    }
  }
}
</style>
