<template>
  <div class="apartment__info">
    <div class="apartment__info__heading">
      <h3>{{ item.title }}</h3>
      <img src="./../../assets/images/properties/Heart.png" alt="" srcset="" />
    </div>

    <p class="apartment__info__address">
      <img
        src="./../../assets/images/properties/Location.svg"
        alt=""
        srcset=""
      />
      <span>{{ item.location }}</span>
    </p>
    <ul>
      <li>
        <img src="./../../assets/images/properties/bed.svg" alt="" srcset="" />
        <span>{{ item.bed }} Beds</span>
      </li>
      <li>
        <img src="./../../assets/images/properties/bath.svg" alt="" srcset="" />
        <span>{{ item.baths }} Baths</span>
      </li>
      <li>
        <img src="./../../assets/images/properties/sqft.svg" alt="" srcset="" />
        <span>{{ item.sqft }} Sqft</span>
      </li>
      <li v-if="item.wifi">
        <img src="./../../assets/images/properties/wifi.svg" alt="" srcset="" />
        <span> Wifi</span>
      </li>
    </ul>
    <div class="apartment__info__price">
      <p class="d-flex align-items-center">
        <b>$10,000</b>
        <span>$12,000</span>
      </p>
      <custom-button text="View Details" btnClass="details"></custom-button>
    </div>
  </div>
</template>
<script>
import CustomButton from './../shared/customButton/index.vue';
export default {
  props: ['item'],
  components: {
    CustomButton,
  },
};
</script>
<style scoped lang="scss">
.apartment__info {
  padding-inline: 10px;
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: var(--text-color-secondary);
    }
    margin-block-end: 12px;
  }

  &__address {
    margin-block-end: 30px;
    span {
      font-size: 1rem;
      color: var(--text-gray-color);
      margin-inline-start: 8px;
    }
  }
  ul {
    margin-block-end: 50px;
    li {
      list-style: none;
      display: inline-block;
      margin-inline-end: 16px;
      span {
        font-size: 14px;
        color: var(--text-gray-color);
        margin-inline-start: 7px;
        color: var(--text-gray-color);
      }
    }
  }
  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      b {
        color: var(--text-color-secondary);
        font-size: 22px;
        margin-inline-end: 8px;
        font-weight: 700;
      }
      span {
        color: var(--text-gray-color);
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
        text-decoration: line-through;
        text-decoration-color: var(--text-gray-color);
      }
    }
  }
}
@media (max-width: 576px) {
  .apartment__info__heading {
    h3 {
      margin-block-start: 20px;
      font-size: 20px;
    }
  }
}
</style>
