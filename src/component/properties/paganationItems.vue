<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <i class="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <!-- Math.ceil(propInformations.length / itemPerPage) -->
        <li class="page-item" v-for="index in 4" :key="index">
          <router-link class="page-link" to="/prop" @click="sendIndex(index)">{{
            index
          }}</router-link>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
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
      dataArr: [
        {
          id: 0,
          title: 'Renovated Apartment 1',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 1,
        },
        {
          id: 1,
          title: 'Amazing Apartment 2',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
        },
        {
          id: 2,
          title: 'Renovated Apartment 3',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
        },
        {
          id: 3,
          title: 'Renovated Apartment 4',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 2,
        },
        {
          id: 4,
          title: 'Amazing Apartment 5',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
        },
        {
          id: 5,
          title: 'Renovated Apartment 6',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
        },
        {
          id: 6,
          title: 'Renovated Apartment 7',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 3,
        },
        {
          id: 7,
          title: 'Amazing Apartment 8',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
        },
        {
          id: 8,
          title: 'Renovated Apartment 9',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
        },
        {
          id: 9,
          title: 'Renovated Apartment 10',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 4,
        },
      ],
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
      this.$store.dispatch('propFl/filterItems', index, this.dataArr);
    },
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
}
</style>
