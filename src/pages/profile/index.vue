<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <my-profile></my-profile>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3>My Profile</h3>
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
import MyProfile from './../../component/myProfile/index.vue';
import AdvertiseMent from './../../component/advertiseMent/index.vue';
export default {
  data() {
    return {
      flage: true,
    };
  },
  components: {
    Profile,
    MyProfile,
    AdvertiseMent,
  },
};
</script>
<style lang="scss">
.profile {
  padding-block-start: 40px;
  background-color: #e5e5e5;
  &__left {
    background-color: #fff;
    padding-inline: 18px;
    padding-block: 24px;
    border-radius: 16px;
    height: fit-content;
    &__list {
      margin-block-end: 150px;
      li {
        list-style: none;
        padding-block: 10px;
        margin-block-end: 16px;
        span {
          margin-inline-start: 15px;
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
          color: rgba(115, 118, 128, 1);
        }
        .dropdown-toggle {
          &:hover {
            border: 1px solid transparent;
          }
        }
      }
      li.active,
      li:hover {
        background-color: rgba(246, 247, 251, 1);
        //  padding: 10px 12px;
        padding-block: 10px;
        border-radius: 6px;
        padding-inline-start: 5px;
        span {
          color: var(--main-color);
        }
      }
    }
    &__advertisement {
      height: 540px;
      width: 100%;
      background-color: rgba(119, 119, 119, 0.3);
      border-radius: 8px;
      span {
        font-size: 24px;
        font-weight: 700;
        color: rgba(140, 140, 140, 1);
      }
    }
  }
  &__center {
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-block-end: 24px;
    }
    &__about {
      background-color: #fff;
      border-radius: 16px;
      header {
        padding-inline: 32px;
        padding-block: 13px;
        h4 {
          font-weight: 600;
          font-size: 18px;
        }
        button {
          background-color: var(--main-color);
          color: #fff;
          border-radius: 5px;
          padding-block: 7px;
          padding-inline: 9px;
        }
      }

      &__body {
        padding-inline: 32px;
        margin-block-start: 32px;
        &__name {
          h3 {
            color: rgba(27, 37, 52, 1);
            font-size: 20px;
            font-weight: 600;
            margin-block-end: 8px;
          }
          p {
            font-size: 16px;
            font-weight: 400;
          }
        }
        &__item {
          border: 1px solid #eee;
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
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    &__search {
      background-color: #fff;
      border-radius: 16px;
      margin-block-end: 100px;
      padding-block-end: 20px;

      h4 {
        font-weight: 600;
        font-size: 18px;
        padding-inline: 32px;
        padding-block: 13px;
        color: var(--main-color);
      }
      .profile__center__search_body {
        padding-inline: 32px;
        margin-block-start: 32px;
        &__item {
          border: 1px solid rgba(238, 238, 238, 1);
          padding-block: 20px;
          padding-inline: 24px;
          border-radius: 8px;
          margin-block-end: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          button {
            background-color: rgba(34, 0, 84, 0.04);
            color: var(--main-color);
            border-radius: 5px;
            padding-block: 7px;
            padding-inline: 11px;
            border-color: transparent;
            text-transform: capitalize;
            font-weight: 500;
            font-size: 14px;
            display: inline-block;
            margin-inline-end: 8px;
          }
          figure {
            display: inline-block;
            padding: 7px 11px;
            background-color: rgba(255, 238, 239, 1);
            border-radius: 4px;
          }
        }
        &__item-upper {
          border: 1px solid rgba(238, 238, 238, 1);
          padding-block: 11px;
          padding-inline: 25px;
          border-radius: 8px;
          margin-block-end: 8px;
          background-color: rgba(236, 239, 241, 1);

          h5 {
            color: rgba(73, 80, 91, 1);
            font-size: 14px;
            font-weight: 500;
            &:last-child {
              width: 140px;
            }
          }
        }
      }
    }
    hr {
      color: #aaa;
      font-size: 22px;
    }
  }
  .profile__end {
    .profile__end__add {
      height: 640px;
      width: 100%;
      background-color: rgba(119, 119, 119, 0.3);
      border-radius: 8px;
      span {
        font-size: 40px;
        font-weight: 700;
        color: rgba(140, 140, 140, 1);
      }
    }
  }
}

@media (max-width: 992px) {
  .profile__center h3 {
    margin-block-start: 20px !important;
  }
  .profile__center__search_body__item {
    display: block !important;
    p {
      margin-block-end: 5px;
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
    font-size: 14px;
    font-weight: 400;
  }
  .profile__center__about header button {
    padding-inline: 2px;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
