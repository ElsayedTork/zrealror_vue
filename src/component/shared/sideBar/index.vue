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
            <router-link class="dropdown-item" to="#">Action</router-link>
            <router-link class="dropdown-item" to="#"
              >Another action</router-link
            >
            <router-link class="dropdown-item" to="#"
              >Another action</router-link
            >
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
<style lang="scss" scoped>
.profile__left {
  background-color: var(--white-color);
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
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--text-gray-color);
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
    background-color: var(--advertisement-color);
    border-radius: 8px;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--advertisement-text-color);
    }
  }
}
</style>
