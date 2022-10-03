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
          Lowest Price
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"> Lowest Price</a></li>
          <li><a class="dropdown-item" href="#"> heigh Price</a></li>
        </ul>
        <img
          src="./../../assets/images/properties/List.svg"
          class="menu-icon img-fluid me-3"
          alt=""
          srcset=""
          @click="viewList"
        />
        <img
          src="./../../assets/images/properties/Grid.svg"
          class="view-icon img-fluid"
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
  methods: {
    viewList() {
      this.$emit('view-list', 'SingleAppartment');
    },
    viewGrid() {
      this.$emit('view-grid', 'GridAppartment');
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
      font-size: 12px;
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
      font-size: 12px;
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
      .menu-icon {
        margin-inline-start: 69px;
        cursor: pointer;
        display: inline-block;
      }
      .view-icon {
        margin-inline-start: 20x;
        cursor: pointer;
        display: inline-block;
      }
    }
  }
}
</style>
