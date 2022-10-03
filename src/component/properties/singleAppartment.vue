<template>
  {{ propInformations }}

  <section class="apartment">
    <div class="row" v-for="item in propInformations" :key="item.id">
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
</template>
<script>
import ApartmentSlider from './apartmentSlider.vue';
import ApartmentItem from './apartmentItem.vue';
import { mapState } from 'vuex';
export default {
  // data() {
  //   return {
  //     propInformations: this.$store.state.propInformations,
  //   };
  // },
  components: {
    ApartmentSlider,
    ApartmentItem,
  },

  computed: {
    ...mapState({
      propInformations: (state) => {
        console.log(state.propInformations);
        return state.propInformations;
      },
    }),
  },
};
</script>
<style scopd lang="scss">
.apartment {
  background-color: var(--white-color);
  margin-block-start: 20px;
  border-radius: 20px;
  padding: 15px;
}
</style>
