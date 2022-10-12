<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <router-link
            class="page-link"
            to="/prop"
            aria-label="Previous"
            @click="moveLeft"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </router-link>
        </li>
        <li class="page-item" v-for="index in len" :key="index">
          <router-link
            :class="[
              isActive && index == 1 ? 'activeMe page-link' : 'page-link',
            ]"
            to="/prop"
            @click="sendIndex(index)"
            >{{ index }}</router-link
          >
        </li>

        <li class="page-item">
          <router-link
            @click="moveRight"
            class="page-link"
            to="/prop"
            aria-label="Next"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      itemPerPage: 3,
      len: Math.ceil(this.$store.state.propInformations.length / 3),
      indx: 1,
    };
  },
  computed: {
    ...mapState({
      propInformations: (state) => {
        return state.propInformations;
      },
    }),
  },
  methods: {
    sendIndex(index) {
      this.indx = index;
      this.isActive == true;

      this.$store.dispatch('propFl/filterItems', index);
    },
    moveLeft() {
      if (this.indx > 1) {
        this.indx--;
        this.$store.dispatch('propFl/filterItems', this.indx);
      }
    },
    moveRight() {
      if (this.indx < 4) {
        this.indx++;
        this.$store.dispatch('propFl/filterItems', this.indx);
        console.log('this.indx', this.indx);
      }
    },
  },
  created() {
    this.$store.dispatch('propFl/filterItems', 1);
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  width: fit-content;
  margin-inline: auto;
  .page-item {
    margin-inline-end: 10px;
    .page-link {
      background-color: transparent;
      color: var(--text-edit-color);
      &:focus {
        color: var(--white-color);
        background-color: var(--main-color);
        padding-inline: 13px;
        padding-block: 10px;
        box-shadow: none !important;
        border-radius: 8px;
      }
    }
    &:first-of-type,
    &:last-of-type {
      .page-link {
        background-color: var(--white-color);
        padding-inline: 13px;
        padding-block: 10px;
        border-radius: 8px;
        &:focus {
          background-color: var(--white-color);
          color: var(--text-edit-color);
        }
      }
    }
  }
  .activeMe {
    color: var(--white-color) !important;
    background-color: var(--main-color) !important;
    padding-inline: 13px;
    padding-block: 10px;
    box-shadow: none !important;
    border-radius: 8px;
  }
}
</style>
