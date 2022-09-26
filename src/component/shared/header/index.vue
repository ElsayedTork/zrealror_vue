<template>
  <header class="header">
    <nav class="navbar navbar-expand-xl navbar-light">
      <div class="container">
        <router-link to="#" class="navbar-brand">
          <img src="./../../../assets/images/logo.svg" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Properties</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Loyalty</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Our Partners</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Contact Us</router-link>
            </li>
          </ul>
          <ul class="header__info">
            <li>
              <i class="fa-solid fa-calendar-days"></i>
            </li>
            <li><i class="fa-regular fa-bell"></i></li>
            <li>
              <div class="dropdown">
                <img
                  src="./../../../assets/images/man.png"
                  alt=""
                  srcset=""
                  width="32"
                  height="32"
                />
                <router-link
                  class="dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hi Ahmed
                </router-link>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li class="dropdown-item viewProfile">
                    <p class="d-flex justify-content-between w-100">
                      <span>View Profile</span>
                      <i class="fa-solid fa-chevron-down"></i>
                    </p>
                  </li>
                  <li class="dropdown-item">
                    <p>
                      <img
                        src="./../../../assets/images/man.png"
                        width="40"
                        height="40"
                        alt=""
                        srcset=""
                        class="me-1"
                      />
                      <span>Ahmed mohamed</span>
                    </p>
                  </li>
                  <li class="dropdown-item">
                    <p>
                      <img
                        src="./../../../assets/images/woman.png"
                        width="40"
                        height="40"
                        alt=""
                        srcset=""
                        class="me-1"
                      />
                      <span>Asma Naser</span>
                    </p>
                  </li>
                  <hr />
                  <li class="dropdown-item logOut">
                    <img
                      src="./../../../assets/icons/profile/logout.svg"
                      alt=""
                      class="me-2"
                    />
                    <span class="logOut">Log Out</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--main-op-color);
  background-image: url('./../../../assets/images/Rectangle.svg');
  padding-block: 40px;
  ul.navbar-nav {
    li.nav-item {
      a.nav-link {
        color: var(--white-color);
      }
    }
  }
  ul.header__info {
    .dropdown {
      .dropdown-toggle {
        color: var(--white-color);
        text-decoration: none;
      }
      .dropdown-item {
        margin-bottom: 24px;
        display: inline-block;
        p {
          background-color: #f6f7fb;
          padding: 12px;
          border-radius: 10px;

          span {
            color: #101018;
            font-weight: 600;
          }
        }
      }
      li.logOut {
        background-color: transparent;
        margin-block-start: 27px;
        span {
          color: var(--text-gray-color) !important;
        }
      }
      li.viewProfile {
        display: flex;
        justify-content: space-between;
        p {
          background-color: transparent;
          i {
            color: var(--text-gray-color);
            font-size: 1.125rem;
          }
          span {
            font-weight: 500;
          }
        }
      }
    }
    li {
      list-style: none;
      display: inline-block;
      color: var(--white-color);
      input[type='date']::-webkit-calendar-picker-indicator {
        background-image: url('./../../../assets/icons/calendar-days-solid.svg');
        fill: var(--white-color) !important;
        color-scheme: var(--white-color);
      }
      i {
        font-size: 1.5625rem;
        margin-inline-end: 20px;
      }
    }
  }
}
</style>
