<template>
  <div class="wishlist">
    <div class="container">
      <div class="wishlist__conatiner">
        <div class="wishlist__conatiner__sidebar">
          <sidebar-wishlist></sidebar-wishlist>
        </div>
        <div class="wishlist__conatiner__items">
          <items-wishlist></items-wishlist>
        </div>
        <div class="wishlist__conatiner__add">
          <img
            src="./../../assets/images/adds/addEndImg.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemsWishlist from './itemsWishlist.vue';
import SidebarWishlist from './sidebarWishlist.vue';
export default {
  components: {
    ItemsWishlist,
    SidebarWishlist,
  },
};
</script>
<style scoped lang="scss">
.wishlist {
  background-color: var(--background-color);
  padding-block-start: 40px;
  &__conatiner {
    display: grid;
    grid-template-columns: 220px 1fr 240px;
    grid-gap: 32px;
    &__sidebar {
    }
    &__items {
    }
  }
}
</style>
