<template>
  <div class="header-menu">
    <div class="container d-flex flex-style">
      <nav class="navbar navbar-expand-lg list-menu">
        <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item categories">
              <span id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Shop By Categories <i class="fas fa-angle-down"></i>
              </span>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>Clother<i class="fas fa-angle-right"></i></li>
                <li>Sport Clother<i class="fas fa-angle-right"></i></li>
                <li>Smartphones<i class="fas fa-angle-right"></i></li>
                <li>Digital camera<i class="fas fa-angle-right"></i></li>
                <li>Eyewear</li>
                <li>Footwear</li>
                <li>Electronic</li>
                <li>Televison</li>
                <li>Furniture</li>
                <li>About us</li>
                <li>Electronic</li>
              </ul>
            </li>
            <router-link to="/megashop/" class="t-direction-none color-333">
              <li class="home">Home</li>
            </router-link>
            <li class="price-drop">Price Drop</li>
            <li class="price-drop">Best Sales</li>
            <li class="price-drop">Delivery</li>
            <li class="price-drop">About us</li>
            <li class="contact-us">Contact us</li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="header-respon" id="menu-small">
    <div class="container d-flex flex-style">
      <div class="header-respon-left d-flex">
        <div
          class="icon-menu"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          <i class="fas fa-bars"></i>
        </div>
        <div class="offcanvas offcanvas-start" id="demo">
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul>
              <li>Clother<i class="fas fa-angle-right"></i></li>
              <li>Sport Clother<i class="fas fa-angle-right"></i></li>
              <li>Smartphones<i class="fas fa-angle-right"></i></li>
              <li>Digital camera<i class="fas fa-angle-right"></i></li>
              <li>Eyewear</li>
              <li>Footwear</li>
              <li>Electronic</li>
              <li>Televison</li>
              <li>Furniture</li>
              <li>About us</li>
              <li>Electronic</li>
            </ul>
          </div>
        </div>
        <!-- Offcanvas Sidebar -->
        <div class="logo-menu">
          <img src="../../../assets/logo.svg" width="100%" alt="" />
        </div>
      </div>
      <div class="header-respon-right d-flex">
        <div class="three-dot">
          <i class="fas fa-ellipsis-v"></i>
        </div>
        <div class="input-search">
          <i class="fas fa-search"></i>
        </div>
        <div class="user">
          <i class="far fa-user"></i>
        </div>
        <div class="cart">
          <span>1</span>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var menuResPon = document.getElementById("menu-small") as HTMLDivElement;
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    menuResPon.style.position = "fixed";
  } else {
    menuResPon.style.position = "absolute";
  }
}
</script>

<style scoped>
.offcanvas-body ul li {
  list-style-type: none;
  justify-content: space-between;
  display: flex;
}
.offcanvas-body {
  border-top: 1px solid #cdcdcd;
}
.offcanvas-body ul li:hover {
  color: #e76453;
  cursor: pointer;
}
.offcanvas-body ul li i {
  margin-top: 8px;
}
.header-menu .list-menu {
  font-size: 14px;
  width: 100%;
  background: -webkit-linear-gradient(top, #f4f4f4 0%, #d9d8d4 100%);
  height: 48px;
  border-radius: 5px 0 5px 5px;
}
.header-menu .list-menu .categories {
  background-color: #e5e5e5;
  height: 48px;
  border-radius: 5px;
  width: 230px;
  padding: 5px;
}
.header-menu .list-menu .categories > span {
  padding-left: 10px;
  line-height: 38px;
  background-color: #e75c49;
  border-radius: 5px;
  height: 38px;
  display: block;
  color: #fff;
  font-style: normal;
}
.header-menu .list-menu .categories > span > i {
  margin-left: 35px;
  background-color: #fff;
  color: #e66453;
  width: 15px;
  line-height: 9px;
  border-radius: 10px;
  padding: 4px 0 0 2.5px;
  height: 15px;
}
.header-menu .list-menu .home {
  line-height: 48px;
  padding: 0 30px;
  border-right: 0.5px solid #fff;
}
.header-menu .list-menu .price-drop {
  line-height: 48px;
  padding: 0 20px;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #fff;
}
.header-menu .list-menu .contact-us {
  line-height: 48px;
  padding: 0 20px;
  border-left: 1px solid #d2d2d2;
}
.header-menu .list-menu .navbar-nav > li:hover {
  color: #e66453;
  cursor: pointer;
}
.header-menu .list-menu .navbar-nav > li > ul {
  width: 230px;
  background-color: #e5e5e5;
  padding: 5px;
}
.header-menu .list-menu .navbar-nav > li > ul > li {
  font-size: 13px;
  line-height: 43px;
  height: 43px;
  background-color: #f6f6f6;
  border-bottom: 1px solid #e0e0e0;
  letter-spacing: 0.2px;
  line-height: 22px;
  padding: 10px 10px 10px 15px;
  display: flex;
  justify-content: space-between;
}
.header-menu .list-menu .navbar-nav > li > ul > li > i {
  margin-top: 3px;
}
.header-menu .list-menu .navbar-nav > li > ul > li:hover {
  color: #e66453;
}
.header-menu .list-menu .navbar-nav > li > ul > li:first-child {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
.header-menu .list-menu .navbar-nav > li > ul > li:last-child {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}
.header-respon {
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 5px 10px 15px #818c9440;
  z-index: 99999;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px;
  line-height: 50px;
  display: none !important;
}
.icon-menu {
  margin-right: 20px;
}
.cart {
  position: relative;
}
.cart span {
  position: absolute;
  background-color: #e76453;
  top: 1px;
  left: 16px;
  line-height: 17px;
  color: #fff;
  width: 17px;
  text-align: center;
  height: 17px;
  border-radius: 100px;
  font-size: 12px;
}
.three-dot,
.input-search,
.user,
.cart {
  margin-left: 20px;
}
.header-respon i {
  cursor: pointer;
  font-size: 25px;
}
@media (max-width: 991px) {
  .header-menu {
    display: none !important;
  }
  .header-respon {
    display: block !important;
  }
}
</style>
