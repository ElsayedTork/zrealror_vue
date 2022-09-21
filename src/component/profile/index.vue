<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-sm-2"></section>
        <section class="col-sm-7 profile__center">
          <h3>My Profile</h3>
          <div class="profile__center__about">
            <header class="d-flex justify-content-between align-items-center">
              <h4>Personal Info</h4>
              <button>
                <i class="fa-solid fa-pen"></i> <span>Edit Profile</span>
              </button>
            </header>
            <hr />
            <div class="profile__center__about__body">
              <section class="d-flex align-items-center">
                <div class="me-4">
                  <img
                    src="./../../assets/images/man.png"
                    width="100"
                    height="100"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h3>Ahmed Mohamed</h3>
                  <p>@Ahmed.M</p>
                </div>
              </section>
              <section class="row profile__center__about__body__data">
                <ul class="col-4">
                  <li>Email:</li>
                  <li>ahmed@gmail.com</li>
                </ul>
                <ul class="col-4">
                  <li>Password:</li>
                  <li>•••••••••••</li>
                </ul>
                <ul class="col-4">
                  <li>Mobile Number:</li>
                  <li>0122 568 5997</li>
                </ul>
                <ul class="col-4">
                  <li>Language:</li>
                  <li>English</li>
                </ul>
                <ul class="col-4">
                  <li>City:</li>
                  <li>Cairo</li>
                </ul>
                <ul class="col-4">
                  <li>Gender:</li>
                  <li>Male</li>
                </ul>
                <ul class="col-4">
                  <li>Date of Birth:</li>
                  <li>17/7/1995</li>
                </ul>
                <ul class="col-4">
                  <li>Marital Statue:</li>
                  <li>Married</li>
                </ul>
                <ul class="col-4">
                  <li>Number of Childern:</li>
                  <li>5</li>
                </ul>
              </section>
            </div>
          </div>

          <div class="profile__center__about">
            <header class="d-flex justify-content-between align-items-center">
              <h4>statistics</h4>
            </header>
            <hr />
            <div class="profile__center__about__body pb-4">
              <div class="profile__center__about__body__item">
                <span>Opened Requests</span>
                <div class="d-flex align-items-center justify-content-start">
                  <figure class="me-2">
                    <img src="./../../assets/images/TickSquare.png" alt="" />
                  </figure>
                  <b>80</b>
                </div>
              </div>
            </div>
          </div>
          <div class="profile__center__search mt-4">
            <h4>Saved Search</h4>
            <hr />
            <div class="profile__center__search_body">
              <div
                class="d-flex justify-content-between align-items-center profile__center__search_body__item-upper"
              >
                <h5>Search Name</h5>
                <h5>Action</h5>
              </div>
              <div
                class="profile__center__search_body__item d-flex justify-content-between align-items-center"
              >
                <p>Properties in cairo less than 700k</p>
                <div>
                  <button>apply search</button>
                  <figure>
                    <img
                      src="./../../assets/images/Delete.png"
                      alt=""
                      srcset=""
                    />
                  </figure>
                </div>
              </div>
              <div
                class="profile__center__search_body__item d-flex justify-content-between align-items-center"
              >
                <p>Properties in cairo less than 700k</p>
                <div>
                  <button>apply search</button>
                  <figure>
                    <img
                      src="./../../assets/images/Delete.png"
                      alt=""
                      srcset=""
                    />
                  </figure>
                </div>
              </div>
              <div
                class="profile__center__search_body__item d-flex justify-content-between align-items-center"
              >
                <p>Properties in cairo less than 700k</p>
                <div>
                  <button>apply search</button>
                  <figure>
                    <img
                      src="./../../assets/images/Delete.png"
                      alt=""
                      srcset=""
                    />
                  </figure>
                </div>
              </div>
              <div
                class="profile__center__search_body__item d-flex justify-content-between align-items-center"
              >
                <p>Properties in cairo less than 700k</p>
                <div>
                  <button>apply search</button>
                  <figure>
                    <img
                      src="./../../assets/images/Delete.png"
                      alt=""
                      srcset=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="col-sm-5 profile__end"></section>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.profile {
  padding-block-start: 40px;
  background-color: #e5e5e5;
  .profile__left {
    background-color: #fff;
    padding-inline: 18px;
    padding-block: 24px;
    border-radius: 16px;
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
}
</style>
