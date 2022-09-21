<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-xl-2 col-md-4 col-sm-12">
          <div class="profile__left">
            <ul class="profile__left__list">
              <li class="active">
                <img
                  src="./../../assets/icons/profile/profile-circle.svg"
                  alt=""
                />
                <span>my profile</span>
              </li>
              <li>
                <div class="dropdown">
                  <img src="./../../assets/icons/profile/wishlist.svg" alt="" />
                  <button
                    class="btn px-0 pe-0 ps-1 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>My Wishlists</span>
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </li>
              <li>
                <img
                  src="./../../assets/icons/profile/PaperDownload.svg"
                  alt=""
                />
                <span>My Requests</span>
              </li>
              <li>
                <img src="./../../assets/icons/profile/logout.svg" alt="" />
                <span>Logout</span>
              </li>
            </ul>
            <div
              class="profile__left__advertisement d-flex justify-content-center align-items-center"
            >
              <span>184 x 540</span>
            </div>
          </div>
        </section>
        <section class="col-xl-7 col-md-8 col-sm-12 profile__center">
          <h3>My Profile</h3>
          <profile-about></profile-about>
          <Statistics />
          <saved-search></saved-search>
        </section>
        <section class="col-xl-3 col-md-6 col-sm-12 profile__end">
          <div
            class="profile__end__add d-flex justify-content-center align-items-center"
          >
            <span>293 x 640</span>
          </div>
        </section>
      </div>
    </div>
  </div>
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
<style lang="scss">
.profile {
  padding-block-start: 40px;
  background-color: #e5e5e5;
  .profile__left {
    background-color: #fff;
    padding-inline: 18px;
    padding-block: 24px;
    border-radius: 16px;
    height: fit-content;
    &__list {
      margin-block-end: 150px;
      li {
        list-style: none;
        margin-block-end: 16px;
        span {
          margin-inline-start: 15px;
          font-size: 14px;
          font-weight: 500;
          text-transform: capitalize;
          color: rgba(115, 118, 128, 1);
        }
      }
      li.active {
        background-color: rgba(246, 247, 251, 1);
        padding: 10px 12px;
        border-radius: 6px;
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
  .profile__center {
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-block-end: 24px;
    }
    .profile__center__about {
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
      .profile__center__about__body {
        padding-inline: 32px;
        margin-block-start: 32px;
        .profile__center__about__body__name {
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
        .profile__center__about__body__item {
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
              background-color: rgba(127, 186, 122, 0.12);
              border-radius: 8px;
              img {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
        .profile__center__about__body__data {
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
    .profile__center__search {
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
@media (max-width: 768px) {
}
</style>
