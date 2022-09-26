<template>
  <div class="profile__center__search mt-4">
    <h4>Saved Search</h4>
    <hr />
    <div class="profile__center__search_body">
      <div
        class="d-flex justify-content-between align-items-center profile__center__search_body__item-upper"
      >
        <h5>Search Name</h5>
        <h5>Action</h5>
      </div>
      <div
        class="profile__center__search_body__item"
        v-for="(search, index) in searches"
        :key="index"
      >
        <p>{{ search }}</p>
        <div class="profile__center__search_body__item-container">
          <button>apply search</button>
          <figure>
            <img
              @click="handelDeleteClick(index)"
              src="./../../../assets/images/Delete.png"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allSearches: [],
    };
  },

  computed: {
    searches() {
      return this.$store.state.searches;
    },
  },
  methods: {
    handelDeleteClick(index) {
      let ele = this.searches[index];
      this.$store.dispatch('deleteSearch', ele);
    },
  },
};
</script>
<style lang="scss" scoped>
.profile__center__search {
  background-color: var(--white-color);
  border-radius: 16px;
  margin-block-end: 100px;
  padding-block-end: 20px;

  h4 {
    font-weight: 600;
    font-size: 1.125rem;
    padding-inline: 32px;
    padding-block: 13px;
    color: var(--main-color);
  }
  .profile__center__search_body {
    padding-inline: 32px;
    margin-block-start: 32px;
    &__item {
      border: 1px solid rgba(238, 238, 238, 1);
      padding-block: 20px;
      padding-inline: 24px;
      border-radius: 8px;
      margin-block-end: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .profile__center__search_body__item-container {
        button {
          background-color: rgba(34, 0, 84, 0.04);
          color: var(--main-color);
          border-radius: 5px;
          padding-block: 7px;
          padding-inline: 11px;
          border-color: transparent;
          text-transform: capitalize;
          font-weight: 500;
          font-size: 0.875rem;
          display: inline-block;
          margin-inline-end: 8px;
        }
        figure {
          display: inline-block;
          padding: 7px 11px;
          background-color: rgba(255, 238, 239, 1);
          border-radius: 4px;
          img {
            cursor: pointer;
          }
        }
      }
    }
    &__item-upper {
      border: 1px solid rgba(238, 238, 238, 1);
      padding-block: 11px;
      padding-inline: 25px;
      border-radius: 8px;
      margin-block-end: 8px;
      background-color: rgba(236, 239, 241, 1);

      h5 {
        color: rgba(73, 80, 91, 1);
        font-size: 0.875rem;
        font-weight: 500;
        &:last-child {
          width: 140px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .profile__center h3 {
    margin-block-start: 20px !important;
  }
  .profile__center__search_body__item {
    display: block !important;
    p {
      margin-block-end: 5px;
      text-align: center;
    }
  }
  .profile__center__search_body__item-container {
    display: flex;
    justify-content: space-between;
  }
  .profile__center__search
    .profile__center__search_body__item-upper
    h5:last-child {
    width: 50px;
  }
}

@media (max-width: 576px) {
  .profile__center__search
    .profile__center__search_body__item-upper
    h5:last-child {
    width: 50px;
  }
}
</style>
