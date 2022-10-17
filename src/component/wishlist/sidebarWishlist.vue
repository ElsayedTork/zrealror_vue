<template>
  <div class="profile__left">
    <ul class="profile__left__list">
      <li class="active">
        <img src="./../../assets/icons/profile/profile-circle.svg" alt="" />
        <span>my profile</span>
      </li>
      <li>
        <div class="dropdown">
          <img src="./../../assets/icons/profile/wishlist.svg" alt="" />
          <button
            class="py-0 pe-0 ps-1 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>My Wishlists</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <router-link to="/" class="dropdown-item" href="#"
                >Action</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item" href="#"
                >Another action</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item" href="#"
                >Something else here</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li>
        <img src="./../../assets/icons/profile/PaperDownload.svg" alt="" />
        <span>My Requests</span>
      </li>
      <li>
        <img src="./../../assets/icons/profile/logout.svg" alt="" />
        <span>Logout</span>
      </li>
    </ul>
    <figure class="d-flex justify-content-center align-items-center">
      <img
        class="img-fluid"
        src="./../../assets/images/adds/addSideBar.png"
        alt=""
      />
    </figure>
  </div>
</template>
<script>
export default {};
</script>
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
      margin-block-end: 6px;
      padding-inline-start: 5px;
      span {
        margin-inline-start: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--text-gray-color);
      }
      .dropdown-toggle {
        border: 1px solid transparent;
        background-color: transparent;
        &:hover {
          border: 1px solid transparent;
        }
      }
    }
    li.active,
    li:hover {
      background-color: rgba(246, 247, 251, 1);
      border-radius: 6px;

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

@media (max-width: 786px) {
  .profile__left {
    padding-inline: 10px;
  }
  figure {
    position: absolute;
    padding: 0;
    position: relative;
    padding-inline: 18px;
    height: 200px;
    img {
      transform: rotate(90deg);
      height: 200px;
    }
  }
}
</style>
