<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__flex">
        <section class="footer__flex__left">
          <figure>
            <img src="./../../assets/images/logo.svg" alt="" />
          </figure>
          <p>
            Zrealtors is the highest rated <br />Shopify expert team in the
            world.
          </p>
          <ul class="mt-4">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Real Estate Guide</a>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <a href="#">Commercial Services</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <a href="#">Become A Partner</a>
            </li>
            <li>
              <a href="#">Reserve Your Property</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>
        <section class="footer__flex__right">
          <ul>
            <li>
              <a href="#"
                >3 Saad area, Menkaure Gate ,<br />Hadayek El ahram, Giza</a
              >
            </li>
            <li>
              <a href="#">+2002 15732</a>
            </li>
            <li>
              <a href="#">info@zrealtors.com</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="footer__down">
      <div class="container">
        <div class="footer__down__flex">
          <p class="me-5 footer__down__flex__frist">
            @2022 <span>Zrealtors</span>. All rights reserved.
          </p>
          <p class="footer__down__flex__second">
            <span class="me-5">Terms & Conditions</span> <span>Privacy</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
footer {
  background: rgba(34, 0, 84, 0.9);
  padding-block-start: 5.0625rem;
  background-image: url(./../../assets/images/Rectangle.svg);
  .footer__flex {
    display: flex;
    justify-content: space-between;
    .footer__flex__left {
      p {
        color: #fff;
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
            background-color: #c8a45d;
          }
          a {
            color: #fff;
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
            color: #fff;
          }
        }
      }
    }
  }
  .footer__down {
    background: rgba(34, 0, 84, 1);
    padding-block: 28px;
    .footer__down__flex {
      display: flex;
      //width: 50%;
      p.footer__down__flex__frist {
        color: #fff;
      }
      p.footer__down__flex__second {
        color: #fff;
      }
    }
  }
}
</style>
