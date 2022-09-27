<template>
  <user-information></user-information>
  <statistics-requests></statistics-requests>
  <saved-search></saved-search>
</template>
<script>
import UserInformation from './userInformation/index.vue';
import StatisticsRequests from './statisticsRequests/index.vue';
import SavedSearch from './savedSearch/index.vue';
export default {
  components: {
    UserInformation,
    StatisticsRequests,
    SavedSearch,
  },
};
</script>
