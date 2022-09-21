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
        <div>
          <button>apply search</button>
          <figure>
            <img
              @click="handelDeleteClick(index)"
              src="./../../assets/images/Delete.png"
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
      console.log(index);
    },
  },
};
</script>
<style></style>
