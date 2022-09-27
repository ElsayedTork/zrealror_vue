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
        <form @submit.prevent="handleEdit">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="fristName">frist Name</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="fristName"
                  aria-describedby="emailHelp"
                  :placeholder="$store.state.profileData.fristName"
                  v-model="fristName"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="lastName">last Name</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="lastName"
                  aria-describedby="emailHelp"
                  :placeholder="$store.state.profileData.lastName"
                  v-model="lastName"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="email"
                  aria-describedby="emailHelp"
                  :placeholder="$store.state.profileData.email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="mobileNumber">mobile Number</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="mobileNumber"
                  aria-describedby="emailHelp"
                  :placeholder="$store.state.profileData.mobile"
                  v-model="mobile"
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
                  :placeholder="$store.state.profileData.password"
                  v-model="Password"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <label for="exampleInputEmail1">City</label>
              <select
                class="form-select shadow-none"
                aria-label="Default select example"
                v-model="city"
              >
                <option selected value="Cairo">Cairo</option>
                <option value="Alex">Alex</option>
                <option value="Tanta">Tanta</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="maritalStatue">gender</label>
              <div
                class="maritalStatue d-flex justify-content-between form-control"
              >
                <div class="form-check active">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="Male"
                    v-model="gender"
                    checked="true"
                  />
                  <span class="form-check-label" for="flexRadioDefault1">
                    Male
                  </span>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="feMale"
                    name="flexRadioDefault"
                    id="female"
                    v-model="gender"
                  />
                  <span class="form-check-label" for="female"> female </span>
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
                  :placeholder="$store.state.profileData.dateofBirth"
                  v-model="dateofBirth"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="maritalStatue">Marital Statue</label>
              <select
                class="form-select shadow-none"
                id="maritalStatue"
                aria-label="Default select example"
                v-model="maritalStatue"
              >
                <option selected value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="devorced">devorced</option>
              </select>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="Childern">Number of Childern</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="Childern"
                  aria-describedby="emailHelp"
                  :placeholder="$store.state.profileData.numberofChildern"
                  v-model="numberofChildern"
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
  data() {
    return {
      fristName: this.$store.state.profileData.FristName,
      lastName: this.$store.state.profileData.lastName,
      email: this.$store.state.profileData.email,
      mobile: this.$store.state.profileData.mobile,
      password: this.$store.state.profileData.password,
      dateofBirth: this.$store.state.profileData.dateofBirth,
      city: this.$store.state.profileData.city,
      maritalStatue: this.$store.state.profileData.maritalStatue,
      numberofChildern: this.$store.state.profileData.numberofChildern,
      theGender: this.$store.state.profileData.gender,
    };
  },
  components: { customButton },
  methods: {
    handleEdit() {
      let datas = {
        fristName: this.fristName,
        lastName: this.lastName,
        email: this.email,
        mobile: this.mobile,
        password: this.password,
        city: this.city,
        gender: this.theGender,
        maritalStatue: this.maritalStatue,
        dateofBirth: this.dateofBirth,
        numberofChildern: this.numberofChildern,
      };
      this.$store.dispatch('setProfileDataAction', datas);
      this.$router.push('/profile');
    },
  },
};
</script>
<style lang="scss" scoped>
.edit {
  background-color: var(--white-color);
  border-radius: 16px;
  margin-block-end: 103px;
  header {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--main-op-color);

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
        font-size: 0.875rem;
        font-weight: 600;
        padding-block-start: 6px;
      }
      p {
        max-width: 300px;
        color: var(--text-edit-color);
        font-size: 0.875rem;
        padding-block-start: 6px;
        padding-block-end: 12px;
      }
      .upload {
        color: var(--white-color);
        background-color: var(--main-color);
        border-color: transparent;
        margin-block-end: 8px;
      }
      .remove {
        color: var(--text-gray-color);
        background-color: var(--white-color);
        border-color: transparent;
        border-color: var(--text-gray-color);
      }
    }
    &__form {
      margin-block-start: 56px;
      label {
        color: var(----text-edit-color);
        font-size: 0.75rem;
        font-weight: 500;
        margin-block-end: 10px;
      }
      input[type='text'],
      input[type='email'],
      input[type='password'],
      input[type='date'],
      select {
        border-color: var(--border-color);
        padding-block: 15px;
        padding-inline: 20px;
        margin-block-end: 24px;
        color: var(--placeholder-color);
      }
      span.form-check-label {
        color: var(--text-edit-color);
      }
      input[type='radio']:checked & + span {
        color: var(--main-color) !important;
      }

      .maritalStatue {
        padding-block: 14px;
        border-color: var(--border-color);
      }
      ::-webkit-calendar-picker-indicator {
        background-image: url('./../../assets/icons/profile/calendar.svg');
      }
      .edit__body__form__btn {
        display: flex;
        justify-content: end;
        .cancel {
          background-color: var(--white-color);
          color: var(--main-color);
          border-color: transparent;
        }
        .save {
          background-color: var(--main-color);
          color: var(--white-color);
          border-color: transparent;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .edit__body__image {
    display: block;
  }
}
</style>
