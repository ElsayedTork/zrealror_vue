<template>
  <div class="edit">
    <header>Edit Profile</header>
    <hr />
    <div class="edit__body">
      <section class="edit__body__image">
        <figure>
          <img src="./../../assets/images/man.png" alt="" srcset="" />
        </figure>
        <div>
          <h5>Upload your picture</h5>
          <p>
            For best results, use an image at least 300px by 300px in either
            JPEG or PNG
          </p>
          <div>
            <custom-button text="upload" btnClass="upload me-2"></custom-button>
            <custom-button text="remove" btnClass="remove"></custom-button>
          </div>
        </div>
      </section>
      <section class="edit__body__form">
        <form>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="FristName">Frist Name</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="FristName"
                  aria-describedby="emailHelp"
                  placeholder="Ahmed"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="LastName">last Name</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="LastName"
                  aria-describedby="emailHelp"
                  placeholder="Mohamed"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="emailForm">Email address</label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="emailForm"
                  aria-describedby="emailHelp"
                  placeholder="ahmed@gmail.com"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="MobileNumber">Mobile Number</label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="MobileNumber"
                  aria-describedby="emailHelp"
                  placeholder="0122 568 5997"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="Password"
                  class="form-control shadow-none"
                  id="Password"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label for="exampleInputEmail1">City</label>
              <select
                class="form-select shadow-none"
                aria-label="Default select example"
              >
                <option selected value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="MaritalStatue">Gender</label>
              <div
                class="MaritalStatue d-flex justify-content-between form-control"
              >
                <div class="form-check active">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <span class="form-check-label" for="flexRadioDefault1">
                    Male
                  </span>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="female"
                  />
                  <span class="form-check-label" for="female"> female </span>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="Custom"
                  />
                  <span class="form-check-label" for="Custom"> Custom </span>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Date of Birthey</label>
                <input
                  type="date"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="MaritalStatue">Marital Statue</label>
              <select
                class="form-select shadow-none"
                id="MaritalStatue"
                aria-label="Default select example"
              >
                <option selected value="1">Married</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="Childern">Number of Childern</label>
                <input
                  type="Password"
                  class="form-control shadow-none"
                  id="Childern"
                  aria-describedby="emailHelp"
                  placeholder="5"
                />
              </div>
            </div>
          </div>
          <div class="edit__body__form__btn">
            <custom-button text="cancel" btnClass="cancel me-2"></custom-button>
            <custom-button text="save" btnClass="save me-2"></custom-button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
import customButton from './../../component/shared/customButton/index.vue';
export default {
  components: { customButton },
};
</script>
<style lang="scss" scoped>
.edit {
  background-color: #fff;
  border-radius: 16px;
  margin-block-end: 103px;
  header {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1b2534;

    padding: 16px 24px;
  }
  &__body {
    padding: 16px 32px;
    &__image {
      display: flex;
      align-items: center;
      margin-block-start: 32px;
      figure {
        margin-inline-end: 26px;
      }
      h5 {
        color: #1b2534;
        font-size: 14px;
        font-weight: 600;
        padding-block-start: 6px;
      }
      p {
        max-width: 300px;
        color: #777e90;
        font-size: 0.875rem;
        padding-block-start: 6px;
        padding-block-end: 12px;
      }
      .upload {
        color: #fff;
        background-color: #220054;
        border-color: transparent;
        margin-block-end: 8px;
      }
      .remove {
        color: #737680;
        background-color: #fff;
        border-color: transparent;
        border-color: #737680;
      }
    }
    &__form {
      margin-block-start: 56px;
      label {
        color: #777e90;
        font-size: 12px;
        font-weight: 500;
        margin-block-end: 10px;
      }
      input[type='text'],
      input[type='email'],
      input[type='password'],
      input[type='date'],
      select {
        border-color: #eeeeee;
        padding-block: 15px;
        padding-inline: 20px;
        margin-block-end: 24px;
      }
      ::-webkit-input-placeholder {
        color: #152c5b !important;
      }
      :-ms-input-placeholder {
        color: #152c5b !important;
      }
      ::placeholder,
      select option {
        color: #152c5b !important;
      }
      span.form-check-label {
        color: #777e90;
      }
      input[type='radio']:checked {
        color: red;
      }
      .form-check.active {
        span {
          color: var(--main-color);
        }
      }
      .MaritalStatue {
        padding-block: 14px;
        border-color: #eeeeee;
      }
      ::-webkit-calendar-picker-indicator {
        background-image: url('./../../assets/icons/profile/calendar.svg');
      }
      .edit__body__form__btn {
        display: flex;
        justify-content: end;
        .cancel {
          background-color: #fff;
          color: var(--main-color);
          border-color: transparent;
        }
        .save {
          background-color: var(--main-color);
          color: #fff;
          border-color: transparent;
        }
      }
    }
  }
}
</style>
