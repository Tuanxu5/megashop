<template>
  <nav class="header-nav border-bottom pt-2">
    <div class="container d-flex flex-style">
      <div class="nav-left">
        <ul class="list-contact list-st-none d-flex ps-0">
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-twitter"></i></li>
          <li><i class="fab fa-youtube"></i></li>
          <li><i class="fab fa-pinterest-p"></i></li>
          <li><i class="fab fa-instagram"></i></li>
        </ul>
      </div>
      <div class="nav-right fs-12 color-666">
        <div class="list-menu d-flex">
          <div class="border-end single-menu">
            <span>Store Locator</span>
          </div>
          <div class="border-end single-menu">
            <span>Compare</span>
          </div>
          <div class="border-end single-menu">
            <span>Wishlist</span>
          </div>
          <div class="border-end single-menu currency">
            <span>Currency &nbsp;<i class="fas fa-angle-down"></i></span>
            <ul
              class="show-currency shadow-sm border-cd py-1 px-3 pos-abs color-black rounded list-st-none tran-default bg-fff transform-scale0"
            >
              <li class="p-1">
                <a class="t-direction-none color-black" href="#">
                  <i class="fas fa-euro-sign me-1"></i>EUR
                </a>
              </li>
              <li class="p-1">
                <a class="t-direction-none color-black" href="#">
                  <i class="fas fa-dollar-sign me-1"></i>USD
                </a>
              </li>
            </ul>
          </div>
          <div class="bd-r single-menu language">
            <span>Language<i class="fas fa-angle-down ms-1"></i></span>
          </div>
          <div class="single-menu my-account">
            <span class="pe-0">
              My Account<i class="fas fa-angle-down ms-1"></i>
            </span>
            <ul
              class="show-my-account shadow-sm border-cd py-1 px-3 pos-abs color-black rounded list-st-none tran-default bg-fff transform-scale0"
            >
              <li class="p-1">
                <a class="t-direction-none color-black" href="#">
                  <i class="fas fa-sign-in-alt me-1"></i>Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.header-nav {
  background-color: #f0f0f0;
  height: 40px;
}
.header-nav .nav-left .list-contact > li {
  cursor: pointer;
  color: #7e7e7e;
  height: 20px;
  width: 23px;
  margin-right: 19px;
}
.nav-left .list-contact > li:hover {
  color: #e76453;
}
.single-menu {
  margin-top: 3px;
}
.header-nav .nav-right .list-menu .single-menu > span {
  padding: 0 12px;
  margin-top: -3px;
  cursor: pointer;
}
.header-nav .nav-right .list-menu .single-menu > span:hover {
  color: #e76453;
}
.show-currency {
  right: 23.2%;
  width: 120px;
  margin-top: 1px;
}
.show-currency li:hover a {
  padding: 1px;
  color: #e76453;
}
.currency:hover .show-currency {
  transform: scale(1);
}
.show-my-account {
  right: 6.4%;
  width: 150px;
  margin-top: 1px;
  vertical-align: middle;
}
.show-my-account li:hover a {
  padding: 1px;
  color: #e76453;
}
.show-my-account a {
  text-decoration: none;
  color: #000;
}
.my-account:hover .show-my-account {
  transition: all 0.5s ease;
  transform: scale(1);
}
@media (max-width: 991px) {
  .header-nav {
    display: none;
  }
}
</style>
