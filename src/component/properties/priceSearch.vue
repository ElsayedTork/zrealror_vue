<template>
  <div class="priceContainer">
    <div class="priceContainer__result">
      <b class="me-2">Properties</b>
      <span class="priceContainer__result__line"></span>
      <span class="priceContainer__result__total">Total </span>
      <span class="priceContainer__result__numbers">165 result</span>
    </div>
    <div class="priceContainer__search">
      <div class="dropdown">
        <span>Sort by:</span>
        <a
          class="sss dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedPrice }}
        </a>

        <ul class="dropdown-menu">
          <li @click="lowPrices">
            <router-link to="/prop" class="dropdown-item">
              {{ lowPrice }}</router-link
            >
          </li>
          <li @click="heighPrices">
            <router-link to="/prop" class="dropdown-item">{{
              heighPrice
            }}</router-link>
          </li>
        </ul>

        <img
          :src="require(`./../../assets/images/properties/${image}.svg`)"
          :class="[
            activeAppartment ? 'active' : '',
            'menu-icon img-fluid me-3',
          ]"
          alt=""
          srcset=""
          @click="viewList"
        />

        <img
          :src="require(`./../../assets/images/properties/${imageGrid}.svg`)"
          :class="[activeGride ? 'active' : '', 'view-icon img-fluid']"
          alt=""
          srcset=""
          @click="viewGrid"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeGride: false,
      activeAppartment: true,
      lowPrice: 'Lowest Price',
      heighPrice: 'heigh Price',
      selectedPrice: 'Lowest Price',
      image: 'ListIcon',
      imageGrid: 'Grid',
    };
  },
  methods: {
    viewList() {
      this.image = 'ListIcon';
      this.imageGrid = 'Grid';
      this.activeGride = false;
      this.activeAppartment = true;
      this.$emit('view-list', 'SingleAppartment');
    },
    viewGrid() {
      this.image = 'single';
      this.imageGrid = 'GridIcon';
      this.activeGride = true;
      this.activeAppartment = false;
      this.$emit('view-grid', 'GridAppartment');
    },
    lowPrices() {
      this.selectedPrice = this.lowPrice;
      this.$store.dispatch('propFl/priceFilter', this.selectedPrice);
    },
    heighPrices() {
      this.selectedPrice = this.heighPrice;
      this.$store.dispatch('propFl/priceFilter', this.selectedPrice);
    },
  },
};
</script>
<style scoped lang="scss">
.priceContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white-color);
  padding-inline: 24px;
  padding-block: 16px;
  border-radius: 8px;
  &__result {
    b {
      font-family: Inter;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-color-secondary);
    }
    &__total {
      font-family: Inter;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-color-secondary);
    }
    &__line {
      display: inline-block;
      width: 30px;
      height: 1px;
      background-color: var(--border-color);
      transform: rotate(90deg);
    }
    &__numbers {
      font-family: Open Sans;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--placeholder-color);
    }
  }
  &__search {
    .dropdown {
      a.dropdown-toggle {
        color: var(--placeholder-color);
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
      }
      span {
        font-size: 1rem;
        font-weight: 500;
      }
      img.menu-icon {
        margin-inline-start: 69px;
        cursor: pointer;
        display: inline-block;
        padding: 8px;
      }
      .view-icon {
        margin-inline-start: 20x;
        cursor: pointer;
        display: inline-block;
        padding: 8px;
      }
      .active {
        background-color: var(--main-color);
        border-radius: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .priceContainer {
    display: block;
  }
}
@media (max-width: 1200px) {
  .priceContainer {
    margin-block-start: 20px;
  }
}
</style>
