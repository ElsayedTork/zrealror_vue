<template>
  <section class="apartment">
    <section>
      <div class="row row-cols-2">
        <div
          class="col-md-6 col-lg-4 col-12 apartment__element"
          v-for="item in propInformations"
          :key="item.id"
        >
          <div class="apartment__element__Child">
            <div class="row">
              <div class="col-md-12">
                <apartment-slider></apartment-slider>
              </div>
              <div class="col-md-12">
                <grid-item :item="item"></grid-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import ApartmentSlider from './apartmentSlider.vue';
import GridItem from './gridItem.vue';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      grid: false,
    };
  },
  components: {
    ApartmentSlider,
    GridItem,
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
<style scopd lang="scss">
.apartment {
  padding-block-start: 20px;
  margin-block-start: 0;
  &__element {
    margin-block-end: 20px;
    .apartment__element__Child {
      background-color: var(--white-color) !important;
      border-radius: 20px;
      padding-inline: 10px;
      padding-block: 10px 20px;
    }
  }
}
</style>
