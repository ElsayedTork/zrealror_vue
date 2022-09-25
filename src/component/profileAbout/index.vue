<template>
  <div class="profile__center__about">
    <header class="d-flex justify-content-between align-items-center">
      <h4>Personal Info</h4>
      <router-link to="/edit">
        <button>
          <i class="fa-solid fa-pen"></i>
          <span class="mx-2">Edit Profile</span>
        </button>
      </router-link>
    </header>
    <hr />
    <div class="profile__center__about__body">
      <section
        class="d-flex align-items-center profile__center__about__body__name"
      >
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
          <h3>
            {{ $store.state.profileData.fristName }}
            {{ $store.state.profileData.lastName }}
          </h3>
          <p>@Ahmed.M</p>
        </div>
      </section>
      <section class="row profile__center__about__body__data">
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Email:</li>
          <li>{{ $store.state.profileData.email }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Password:</li>
          <li>•••••••••••</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Mobile Number:</li>
          <li>{{ $store.state.profileData.mobile }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Language:</li>
          <li>English</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>City:</li>
          <li>{{ $store.state.profileData.city }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Gender:</li>
          <li>{{ $store.state.profileData.gender }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Date of Birth:</li>
          <li>{{ $store.state.profileData.dateofBirth }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Marital Statue:</li>
          <li>{{ $store.state.profileData.maritalStatue }}</li>
        </ul>
        <ul class="col-sm-6 col-md-4 col-12">
          <li>Number of Childern:</li>
          <li>{{ $store.state.profileData.numberofChildern }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>
