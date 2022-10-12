<template>
  <div class="apartment__info">
    <span class="discound">15 % OFF</span>
    <div class="apartment__info__Perimum"></div>
    <h3>{{ item.title }}</h3>

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
    </ul>
    <div class="apartment__info__price">
      <p class="d-flex align-items-center">
        <b>$10,000</b>
        <span>$12,000</span>
      </p>
      <img src="./../../assets/images/properties/Heart.png" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  components: {},
};
</script>
<style scoped lang="scss">
.apartment__info {
  padding-inline: 10px;
  position: relative;
  .discound {
    position: absolute;
    right: -10px;
    top: 45px;
    background-color: var(--discound_color);
    color: var(--white-color);
    display: inline;
    width: fit-content;
    padding-inline: 8px;
    padding-block: 4px;
    border-radius: 6px 0 0 6px;
    font-size: 0.75rem;
    font-weight: 500;
  }
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
    font-size: 20px;
    font-weight: 600;
    font-weight: 600;
    color: var(--text-color-secondary);
    margin-block-end: 10px;
  }
  &__address {
    margin-block-end: 20px;
    span {
      font-size: 0.875rem;
      color: var(--text-gray-color);
      margin-inline-start: 8px;
    }
  }
  ul {
    margin-block-end: 25px;
    li {
      list-style: none;
      display: inline-block;
      margin-inline-end: 16px;
      span {
        font-size: 0.75rem;
        color: var(--text-gray-color);
        margin-inline-start: 4px;
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
        color: var(--text-gray-color);
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
        text-decoration: line-through;
        text-decoration-color: var(--text-gray-color);
      }
    }
  }
}

@media (max-width: 578px) {
  .discound {
    top: 100px;
  }
}
</style>
