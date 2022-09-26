<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <side-bar></side-bar>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3 class="mb-3">My Profile</h3>
          <Profile />
        </section>
        <section class="col-xl-3 col-md-6 col-sm-12 profile__end">
          <AdvertiseMent />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Profile from './../../component/profile/index.vue';
import SideBar from './../../component/shared/sideBar/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  data() {
    return {
      flage: true,
    };
  },
  components: {
    Profile,
    SideBar,
    AdvertiseMent,
  },
};
</script>
<style lang="scss">
.profile {
  padding-block-start: 40px;
  background-color: #e5e5e5;

  .profile__end {
    .profile__end__add {
      height: 640px;
      width: 100%;
      background-color: var(--advertisement-color);
      border-radius: 8px;
      span {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--advertisement-text-color);
      }
    }
  }
}

@media (max-width: 576px) {
  .profile__center__search
    .profile__center__search_body__item-upper
    h5:last-child {
    width: 50px;
  }
  .profile__center__about header h4 {
    font-size: 0.875rem;
    font-weight: 400;
  }
  .profile__center__about header button {
    padding-inline: 2px;
    font-size: 0.875rem;
    font-weight: 400;
  }
}
</style>
