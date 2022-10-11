<template>
  <section class="unit">
    <h3 class="unit__heading">Featured Properties in this Location</h3>
    <ul class="unit__filter">
      <li
        :class="{ active: isActive[0] }"
        @click="unitFlitering('residential')"
      >
        Residential
      </li>
      <li :class="{ active: isActive[1] }" @click="unitFlitering('commercial')">
        Commercial
      </li>
      <li
        :class="{ active: isActive[2] }"
        @click="unitFlitering('adminstrative')"
      >
        Adminstrative
      </li>
    </ul>
    <section class="unit__items row">
      <div
        class="col-md-6 col-lg-4 col-12 apartment__element"
        v-for="item in units"
        :key="item.id"
      >
        <div class="apartment__element__Child hideFeature">
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
    </section>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import ApartmentSlider from './../../component/properties/apartmentSlider.vue';
import GridItem from './../../component/properties/gridItem.vue';
export default {
  data() {
    return {
      isActive: [true, false, false],
    };
  },
  components: {
    ApartmentSlider,
    GridItem,
  },
  computed: {
    ...mapState({
      units: (state) => {
        return state.units.units;
      },
    }),
  },
  created() {
    this.$store.dispatch('units/unitsFilter', 'residential');
  },
  methods: {
    unitFlitering(selectedUnit) {
      if (selectedUnit === 'residential') this.isActive = [true, false, false];
      if (selectedUnit === 'commercial') this.isActive = [false, true, false];
      if (selectedUnit === 'adminstrative')
        this.isActive = [false, false, true];

      this.$store.dispatch('units/unitsFilter', selectedUnit);
    },
  },
};
</script>
<style lang="scss">
.unit {
  margin-block-start: 48px;
  &__heading {
    color: var(--text-color-secondary);
    font-weight: 700;
    font-size: 1.75rem;
    margin-block-end: 24px;
  }
  &__filter {
    background-color: var(--bgFilter);
    padding: 8px;
    border-radius: 8px;
    width: fit-content;
    margin-block-end: 32px;
    li {
      list-style: none;
      display: inline-block;
      color: var(--colorFilter);
      font-size: 600;
      font-size: 1rem;
      padding-inline: 20px;
      padding-block: 10px;
      border-radius: 8px;
      cursor: pointer;
    }
    li.active {
      background-color: var(--main-color);
      color: #fff;
    }
  }
}
.hideFeature {
  .Perimum {
    display: none;
  }
  .apartment__info {
    .discound {
      display: none;
    }
  }
}
</style>
