<template>
  <profile-about></profile-about>
  <Statistics />
  <saved-search></saved-search>
</template>
<script>
import ProfileAbout from './profileAbout/index.vue';
import Statistics from './statistics/index.vue';
import SavedSearch from './savedSearch/index.vue';
export default {
  components: {
    ProfileAbout,
    Statistics,
    SavedSearch,
  },
};
</script>
