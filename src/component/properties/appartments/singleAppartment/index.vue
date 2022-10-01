<template>
  <section class="apartment">
    <div class="row">
      <div class="col-md-4">
        <apartment-slider></apartment-slider>
      </div>
      <div class="col-md-8">
        <apartment-item></apartment-item>
      </div>
    </div>
  </section>
</template>
<script>
import ApartmentSlider from './../../apartmentSlider/index.vue';
import ApartmentItem from '../../apartmentItem/index.vue';
export default {
  components: {
    ApartmentSlider,
    ApartmentItem,
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
