<template>
  <div class="profile__left">
    <ul class="profile__left__list">
      <li class="active">
        <img src="./../../assets/icons/profile/profile-circle.svg" alt="" />
        <span>my profile</span>
      </li>

      <li class="profile__left__dropdown">
        <div class="p-0 m-0">
          <img src="./../../assets/icons/profile/wishlist.svg" alt="" />
          <span>My Wishlists</span>
          <i class="fa-solid fa-chevron-up ms-5"></i>
        </div>
      </li>
      <ol>
        <li
          v-for="(item, index) in propList"
          :key="index"
          @click="filterWishlist(item)"
        >
          <span>{{ item }}</span>
          <span>5</span>
        </li>
      </ol>
      <li @click="showList">
        <img src="./../../assets/images/wishlist/plus-circle.svg" alt="" />
        <span>Add New List</span>
      </li>
      <li>
        <img src="./../../assets/icons/profile/PaperDownload.svg" alt="" />
        <span>Contacted Units</span>
      </li>
      <li>
        <img src="./../../assets/images/wishlist/requestUnit.svg" alt="" />
        <span>My Requests</span>
      </li>
      <li>
        <img src="./../../assets/icons/profile/logout.svg" alt="" />
        <span>Logout</span>
      </li>
    </ul>
    <div
      class="profile__left__advertisement d-flex justify-content-center align-items-center"
    >
      <span>184 x 540</span>
    </div>
    <div v-if="flag">
      <list-model @close-modal="closeModal"></list-model>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import listModel from './listModal.vue';
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    listModel,
  },
  computed: {
    ...mapState({
      propList: (state) => {
        return state.propFl.propList;
      },
    }),
  },
  methods: {
    showList() {
      this.flag = true;
    },
    closeModal() {
      this.flag = false;
    },
    filterWishlist(itemWishlist) {
      this.$store.dispatch('propFl/wishlistFilter', itemWishlist);
    },
  },
};
</script>
<style lang="scss" scoped>
.profile__left {
  background-color: var(--white-color);
  padding-inline: 12px;
  padding-block: 24px;
  border-radius: 16px;
  height: fit-content;
  &__list {
    margin-block-end: 150px;
    li {
      list-style: none;
      padding-block: 10px;
      margin-block-end: 6px;
      padding-inline-start: 5px;
      cursor: pointer;
      span {
        margin-inline-start: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--text-gray-color);
      }
      .dropdown-toggle {
        border: 1px solid transparent;
        background-color: transparent;
        &:hover {
          border: 1px solid transparent;
        }
      }
    }
    li.active,
    li:hover {
      background-color: rgba(246, 247, 251, 1);
      border-radius: 6px;

      span {
        color: var(--main-color);
      }
    }
    ol {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 20px;
        span {
          &:last-child {
            color: var(--white-color);
            background-color: var(--list-color);
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            font-size: 0.625rem;
            font-weight: 600;
            text-align: center;
          }
        }
      }
    }
  }
  &__advertisement {
    height: 540px;
    width: 100%;
    background-color: var(--advertisement-color);
    border-radius: 8px;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--advertisement-text-color);
    }
  }
  &__dropdown {
    ol {
      padding-inline: 20px;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
