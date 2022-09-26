<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <my-profile></my-profile>
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
import MyProfile from './../../component/myProfile/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  components: {
    EditProfile,
    MyProfile,
    AdvertiseMent,
  },
};
</script>