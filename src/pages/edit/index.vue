<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <side-bar></side-bar>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3>My Profile</h3>
          <edit-profile></edit-profile>
          <router-view></router-view>
        </section>
        <section class="col-xl-3 col-md-6 col-sm-12 profile__end">
          <AdvertiseMent />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfile from './../../component/editProfile/index.vue';
import SideBar from './../../component/shared/sideBar/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  components: {
    EditProfile,
    SideBar,
    AdvertiseMent,
  },
};
</script>
