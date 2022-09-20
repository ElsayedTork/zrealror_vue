<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="./../../assets/images/logo.svg" alt="" />
        </a>
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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Properties</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Loyalty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Our Partners</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>
          <ul class="header__info">
            <li><i class="fa-solid fa-calendar-days"></i></li>
            <li><i class="fa-regular fa-bell"></i></li>
            <li>
              <div class="dropdown">
                <img
                  src="./../../assets/images/man.png"
                  alt=""
                  srcset=""
                  width="32"
                  height="32"
                />
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hi Ahmed
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Ahmed mohamed</a></li>
                  <li><a class="dropdown-item" href="#">Asma Naser</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
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
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  background-color: rgba(34, 0, 84, 0.9);
  background-image: url('./../../assets/images/Rectangle.svg');
  padding-block: 40px;
  ul.navbar-nav {
    li.nav-item {
      a.nav-link {
        color: #fff;
      }
    }
  }
  ul.header__info {
    .dropdown {
      .dropdown-toggle {
        color: #fff;
        text-decoration: none;
      }
    }
    li {
      list-style: none;
      display: inline-block;
      color: #fff;
      i {
        font-size: 25px;
        margin-inline-end: 20px;
      }
    }
  }
}
</style>
