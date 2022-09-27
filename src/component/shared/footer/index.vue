<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__flex">
        <section class="footer__flex__left">
          <figure class="mb-2">
            <img src="./../../../assets/images/logo.svg" alt="" />
          </figure>
          <p>
            Zrealtors is the highest rated <br />Shopify expert team in the
            world.
          </p>
          <ul class="mt-4">
            <li>
              <router-link to="#">
                <i class="fa-brands fa-facebook-f"></i>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <i class="fa-brands fa-twitter"></i>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <i class="fa-brands fa-instagram"></i>
              </router-link>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <router-link to="#">Projects</router-link>
            </li>
            <li>
              <router-link to="#">About Us</router-link>
            </li>
            <li>
              <router-link to="#">Real Estate Guide</router-link>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <router-link to="#" href="#">Commercial Services</router-link>
            </li>
            <li>
              <router-link to="#" href="#">Partner with us</router-link>
            </li>
            <li>
              <router-link to="#" href="#">Contact Us</router-link>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <router-link to="#" href="#">Become A Partner</router-link>
            </li>
            <li>
              <router-link to="#" href="#">Reserve Your Property</router-link>
            </li>
            <li>
              <router-link to="#" href="#">Contact Us</router-link>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <router-link to="#" href="#"
                >3 Saad area, Menkaure Gate ,<br />Hadayek El ahram,
                Giza</router-link
              >
            </li>
            <li>
              <router-link to="#" href="#">+2002 15732</router-link>
            </li>
            <li>
              <router-link to="#" href="#">info@zrealtors.com</router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="footer__down">
      <div class="container">
        <div class="footer__down__flex flex-row-reverse">
          <p class="footer__down__flex__second">
            <span class="me-5">Terms & Conditions</span> <span>Privacy</span>
          </p>
          <p class="me-5 footer__down__flex__frist">
            @2022 <span>Zrealtors</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background: var(--main-op-color);
  padding-block-start: 5.0625rem;
  background-image: url(./../../../assets/images/Rectangle.svg);
  .footer__flex {
    display: flex;
    justify-content: space-between;
    margin-block-end: 56px;
    .footer__flex__left {
      p {
        color: var(--white-color);
      }
      ul {
        li {
          list-style: none;
          display: inline-block;
          margin-inline-end: 0.75rem;
          background-color: rgba(255, 255, 255, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          transition: 0.4s background-color;
          &:hover {
            background-color: var(--orange-color);
          }
          a {
            color: var(--white-color);
            margin-block-start: 7px;
            display: inline-block;
          }
        }
      }
    }
    .footer__flex__right {
      ul {
        li {
          list-style: none;
          padding-block-end: 1.5rem;
          a {
            text-decoration: none;
            color: var(--white-color);
          }
        }
      }
    }
  }
  .footer__down {
    background: var(--main-color);
    padding-block: 28px;
    .footer__down__flex {
      display: flex;

      p.footer__down__flex__frist {
        color: var(--white-color);
        span {
          color: var(--orange-color);
        }
      }
      p.footer__down__flex__second {
        color: var(--white-color);
        margin-inline-start: 200px;
      }
    }
  }
}

@media (max-width: 992px) {
  .footer__flex {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .footer__flex__right,
  .footer__flex__left {
    margin-block-end: 30px;
  }
  .footer__down__flex {
    display: flex;
    flex-flow: column;
    flex-direction: column !important;
  }
  p.footer__down__flex__second {
    color: var(--white-color);
    margin-inline-start: 0px !important;
    margin-block-end: 10px;
  }
}

@media (max-width: 576px) {
  .footer__flex {
    display: block !important;
  }
  .footer__flex__right,
  .footer__flex__left {
    margin-block-end: 30px;
  }
}
</style>
