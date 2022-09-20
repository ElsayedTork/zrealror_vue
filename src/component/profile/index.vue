<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <section class="col-sm-2 profile__left"></section>
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
            <div class="profile__center__about__body">
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
    hr {
      color: #aaa;
      font-size: 22px;
    }
  }
}
</style>
