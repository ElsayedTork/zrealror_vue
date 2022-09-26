<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <side-bar></side-bar>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3>My Profile</h3>
          <profile-container></profile-container>
        </section>
        <section class="col-xl-3 col-md-6 col-sm-12 profile__end">
          <AdvertiseMent />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileContainer from './../../component/profileContainer/index.vue';
import SideBar from './../../component/shared/sideBar/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  data() {
    return {
      flage: true,
    };
  },
  components: {
    ProfileContainer,
    SideBar,
    AdvertiseMent,
  },
};
</script>
<style lang="scss">
.profile {
  padding-block-start: 40px;
  background-color: #e5e5e5;
  &__body {
    padding-inline: 32px;
    margin-block-start: 32px;
    &__name {
      h3 {
        color: rgba(27, 37, 52, 1);
        font-size: 1.25rem;
        font-weight: 600;
        margin-block-end: 8px;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
      }
    }
    &__item {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px;
      width: 200px;
      span {
        font-weight: 500;
      }
      div {
        margin-block-start: 20px;
        figure {
          padding: 14px !important;
          border-radius: 8px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        figure.Open {
          background-color: rgba(127, 186, 122, 0.12);
        }
        figure.Closed {
          background-color: rgba(255, 117, 76, 0.12);
        }
      }
    }
    &__data {
      margin-block-end: 32px;
      margin-block-start: 42px;
      ul {
        margin-block-end: 32px;
        li {
          list-style: none;
          margin-block-end: 6px;
          &:first-child {
            color: #49505b;
            font-weight: 500;
          }
          &:last-child {
            color: #5f666f;
            font-weight: 400;
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}

hr {
  color: #aaa;
  font-size: 1.375rem;
}

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
