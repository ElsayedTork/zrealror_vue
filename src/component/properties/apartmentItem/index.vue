<template>
  <div class="apartment__info">
    <div class="apartment__info__Perimum">
      <span>Perimum</span>
      <img
        src="./../../../assets/images/properties/Heart.png"
        alt=""
        srcset=""
      />
    </div>
    <h3>Renovated Apartment</h3>

    <p class="apartment__info__address">
      <img
        src="./../../../assets/images/properties/Location.svg"
        alt=""
        srcset=""
      />
      <span>New Cairo, Egypt</span>
    </p>
    <ul>
      <li>
        <img
          src="./../../../assets/images/properties/bed.svg"
          alt=""
          srcset=""
        />
        <span>4 Beds</span>
      </li>
      <li>
        <img
          src="./../../../assets/images/properties/bath.svg"
          alt=""
          srcset=""
        />
        <span>2 Baths</span>
      </li>
      <li>
        <img
          src="./../../../assets/images/properties/sqft.svg"
          alt=""
          srcset=""
        />
        <span>2500 Sqft</span>
      </li>
      <li>
        <img
          src="./../../../assets/images/properties/wifi.svg"
          alt=""
          srcset=""
        />
        <span>2500 Sqft</span>
      </li>
    </ul>
    <div class="apartment__info__price">
      <p>
        <b>$10,000</b>
        <span>50% off</span>
      </p>
      <custom-button text="View Details" btnClass="details"></custom-button>
    </div>
  </div>
</template>
<script>
import CustomButton from './../../shared/customButton/index.vue';
export default {
  components: {
    CustomButton,
  },
};
</script>
<style scoped lang="scss">
.apartment__info {
  &__Perimum {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 20px;
    span {
      background-color: var(--orange-color);
      color: var(--white-color);
      padding-inline: 12px;
      padding-block: 4px;
      border-radius: 4px;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-color-secondary);
    margin-block-end: 10px;
  }
  &__address {
    margin-block-end: 28px;
    span {
      font-size: 1rem;
      color: var(--text-gray-color);
      margin-inline-start: 8px;
    }
  }
  ul {
    margin-block-end: 44px;
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
      }
      span {
        color: var(--orange-color);
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
      }
    }
  }
}
</style>
