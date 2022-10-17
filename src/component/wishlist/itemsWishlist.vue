<template>
  <div class="items-wishlist">
    <h3>My Wishlists</h3>
    <div class="items-wishlist__header">
      <div class="row">
        <span class="col-4 item-name">cairo</span>
        <div class="col-8 items-wishlist__header__filter">
          <div class="dropdown me-4">
            <span>Category: </span>
            <router-link
              to="/wish"
              class="sss dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Commercial
            </router-link>

            <ul class="dropdown-menu">
              <li @click="lowPrices">
                <router-link to="/wish" class="dropdown-item">
                  Residential
                </router-link>
              </li>
              <li @click="heighPrices">
                <router-link to="/wish" class="dropdown-item">
                  Commercial
                </router-link>
              </li>
              <li @click="heighPrices">
                <router-link to="/wish" class="dropdown-item">
                  Adminstrative
                </router-link>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <span>Sort by: </span>
            <router-link
              to="/wish"
              class="sss dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- {{ selectedPrice }} -->
              Lowest Price
            </router-link>

            <ul class="dropdown-menu">
              <li>
                <router-link to="/wish" class="dropdown-item">
                  Lowest Price
                </router-link>
              </li>
              <li>
                <router-link to="/wish" class="dropdown-item">
                  heighest Price
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div
        class="items-wishlist__element row"
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
  </div>
</template>
<script>
import ApartmentSlider from './../properties/apartmentSlider.vue';
import ApartmentItem from './../properties/apartmentItem.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ApartmentSlider,
    ApartmentItem,
  },
  computed: {
    ...mapState({
      propInformations: (state) => {
        let arr = state.propFl.propInformations.filter(
          (item) => item.isFavorit === true
        );
        console.log(arr);
        return arr;
      },
    }),
  },
};
</script>
<style scoped lang="scss">
.items-wishlist {
  &__element {
    border-radius: 20px;
    padding-block: 15px;
    margin-block-end: 20px;
    background-color: var(--white-color);
    padding-inline-start: 2px;
    position: relative;
    margin-block-start: 24px;
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
  h3 {
    color: var(--text-color-secondary);
    font-size: 1.5rem;
    font-weight: 600;
    margin-block-end: 24px;
  }
  &__header {
    background-color: var(--white-color) !important;
    border-radius: 8px;
    padding-block: 22px;
    padding-inline: 24px;
    span.item-name {
      font-size: 1.25rem;
      font-weight: 600;
    }
    &__filter {
      display: flex;
      align-items: center;
      .dropdown {
        span {
          font-weight: 500;
          color: var(--text-color-secondary);
        }
        a {
          color: var(--placeholder-color);
        }
      }
    }
  }
}
</style>
