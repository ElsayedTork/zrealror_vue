<template>
  <profile-about></profile-about>
  <Statistics />
  <saved-search></saved-search>
</template>
<script>
import ProfileAbout from './../../component/profileAbout/index.vue';
import Statistics from './../../component/statistics/index.vue';
import SavedSearch from './../../component/savedSearch/index.vue';
export default {
  components: {
    ProfileAbout,
    Statistics,
    SavedSearch,
  },
};
</script>
