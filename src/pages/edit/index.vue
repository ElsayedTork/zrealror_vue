<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <user-sidebar></user-sidebar>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3>My Profile</h3>
          <edit-profile></edit-profile>
          <router-view></router-view>
        </section>
        <section class="col-xl-3 col-md-6 col-sm-12 profile__end">
          <advertiseMent></advertiseMent>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfile from './../../component/editProfile/index.vue';
import UserSidebar from './../../component/shared/userSidebar/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  components: {
    EditProfile,
    UserSidebar,
    AdvertiseMent,
  },
};
</script>
<style lang="scss" scoped>
.profile {
  padding-block-start: 40px;
  background-color: var(--background-color)
}
</style>
