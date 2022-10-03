<template>
  <section class="apartment">
    <section :v-if="grid === true">
      <div
        class="apartment_element row"
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
<style scopd lang="scss">
.apartment {
  margin-block-start: 20px;
  .apartment_element {
    border-radius: 20px;
    padding-block: 15px;
    margin-block-end: 20px;
    background-color: var(--white-color);
    padding-inline-start: 2px;
  }
}
</style>
