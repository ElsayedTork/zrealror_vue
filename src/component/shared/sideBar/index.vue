<template>
  <div class="profile__left">
    <ul class="profile__left__list">
      <li class="active">
        <img src="./../../../assets/icons/profile/profile-circle.svg" alt="" />
        <span>my profile</span>
      </li>
      <li>
        <div class="dropdown">
          <img src="./../../../assets/icons/profile/wishlist.svg" alt="" />
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
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li>
        <img src="./../../../assets/icons/profile/PaperDownload.svg" alt="" />
        <span>My Requests</span>
      </li>
      <li>
        <img src="./../../../assets/icons/profile/logout.svg" alt="" />
        <span>Logout</span>
      </li>
    </ul>
    <div
      class="profile__left__advertisement d-flex justify-content-center align-items-center"
    >
      <span>184 x 540</span>
    </div>
  </div>
</template>
