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
        <div class="apartment__element__discound">
          <img
            src="./../../assets/images/properties/sale.png"
            class="img-fluid"
            alt=""
          />
          <span class="">50% OFF</span>
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
<style scopd lang="scss" scoped>
.apartment {
  margin-block-start: 0;
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
      width: 68px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        right: 100%;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        right: 100%;
        color: var(--white-color);
        font-size: 12px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        transform: translateY(3px);
      }
    }
  }
}

@media (max-width: 576px) {
  .apartment__element__discound {
    top: 100px !important;
  }
}
</style>
