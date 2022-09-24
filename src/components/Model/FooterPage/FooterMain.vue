<script lang="ts" setup>
function buttonToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("button to top");
}
</script>
<template>
  <div class="footer_main">
    <div class="container">
      <div class="footer-menu">
        <div class="row">
          <div class="col-lg-3 col-sm-12 col-xs-12">
            <div class="product">
              <div class="title">Products</div>
              <ul class="block_content">
                <li>Prices Drop</li>
                <li>New Products</li>
                <li>Best Sales</li>
                <li>Contact Us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-xs-12">
            <div class="out-company">
              <div class="title">Our Company</div>
              <ul class="block_content">
                <li>Prices Drop</li>
                <li>New Products</li>
                <li>Best Sales</li>
                <li>Contact Us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-xs-12">
            <div class="my__account">
              <div class="title">My Account</div>
              <ul class="block_content">
                <li>Prices Drop</li>
                <li>New Products</li>
                <li>Best Sales</li>
                <li>Contact Us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 col-xs-12">
            <div class="contact-us">
              <div class="title">Contact Us</div>
              <ul class="block_content">
                <li>Demo Store</li>
                <li>42 Puffin street 12345 Puffinville France</li>
                <li>United States</li>
              </ul>
              <div>
                <span class="sales-email">Sales@yourcompany.com</span>
                <br />
                <span class="phone-number">0123-456-789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="accordion">
        <div class="card">
          <a class="btn" data-bs-toggle="collapse" href="#product">
            <div
              class="card-header d-flex"
              style="justify-content: space-between"
            >
              <span>Products</span>
              <span><i class="fas fa-angle-down"></i></span>
            </div>
          </a>
          <div id="product" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <div class="product">
                <ul class="block_content">
                  <li>Prices Drop</li>
                  <li>New Products</li>
                  <li>Best Sales</li>
                  <li>Contact Us</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <a
            class="collapsed btn"
            data-bs-toggle="collapse"
            href="#collapseTwo"
          >
            <div
              class="card-header d-flex mt-1"
              style="justify-content: space-between"
            >
              <span>Out Company</span>
              <span><i class="fas fa-angle-down"></i></span>
            </div>
          </a>
          <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <div class="out-company">
                <ul class="block_content">
                  <li>Prices Drop</li>
                  <li>New Products</li>
                  <li>Best Sales</li>
                  <li>Contact Us</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#myAccount">
            <div
              class="card-header d-flex mt-1"
              style="justify-content: space-between"
            >
              <span>My Account</span>
              <span><i class="fas fa-angle-down"></i></span>
            </div>
          </a>
          <div id="myAccount" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <div class="my__account">
                <ul class="block_content">
                  <li>Prices Drop</li>
                  <li>New Products</li>
                  <li>Best Sales</li>
                  <li>Contact Us</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <a class="collapsed btn" data-bs-toggle="collapse" href="#aboutus">
            <div
              class="card-header d-flex mt-1"
              style="justify-content: space-between"
            >
              <span>Contact Us</span>
              <span><i class="fas fa-angle-down"></i></span>
            </div>
          </a>
          <div id="aboutus" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <div class="contact-us">
                <ul class="block_content">
                  <li>Demo Store</li>
                  <li>42 Puffin street 12345 Puffinville France</li>
                  <li>United States</li>
                </ul>
                <div>
                  <span class="sales-email">Sales@yourcompany.com</span>
                  <br />
                  <span class="phone-number">0123-456-789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-link">
        <span class="bd-r pr-3">Home</span>
        <span class="bd-r">Delivery</span>
        <span class="bd-r">Legal Notice</span>
        <span class="bd-r">Sitemap</span>
        <span class="bd-r">Best Sales</span>
        <span class="bd-r">Price Drop</span>
        <span class="bd-r">New Product</span>
        <span class="bd-r">About Us</span>
        <span>Contact Us</span>
      </div>
    </div>
    <div class="footer">
      <button @click="buttonToTop()" class="buttonToTop">
        <i class="fas fa-chevron-up"></i>
      </button>
      <div class="container">
        <div class="footer-bottom d-flex">
          <span class="copy-right"> © 2022 - Cover software by Shop™ </span>
          <span class="payment">
            <img src="../../../assets/banner/payment.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttonToTop {
  width: 40px;
  height: 40px;
  background-color: #e76453;
  color: #fff;
  border-radius: 100%;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  cursor: pointer;
  border: none;
}

.my__account ul li:hover {
  cursor: pointer;
  color: #e76453;
}

.btn {
  padding: 0;
  border: none;
  color: #e76453;
  border: none;
}

.card {
  border: none;
}

.card-header {
  border: none;
  background-color: #fff;
}

.card-header:focus {
  outline: 0;
}

.card-body ul li {
  list-style-type: none;
}

.flex-style {
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer_main {
  margin-top: 40px;
}

.footer-menu {
  border-bottom: 1px solid #cdcdcd;
  padding-bottom: 30px;
}

.title {
  font-size: 17px;
  padding-bottom: 20px;
  color: #e76453;
}

ul {
  padding: 0;
}

.footer-menu ul li {
  width: 250px;
  font-size: 14px;
  margin: 15px 0;
  list-style-type: none;
  text-align: left;
}

.footer-menu .my__account ul li:hover,
.product ul li:hover,
.out-company ul li:hover {
  color: #e76453;
  cursor: pointer;
}

.footer-menu .sales-email {
  font-size: 14px;
}

.footer-menu .phone-number {
  font-size: 24px;
  display: block;
  font-weight: 500;
  margin-top: 5px;
}

.footer-link {
  padding: 30px 0;
}

.footer-link span {
  text-align: left;
  font-size: 14px;
}

.footer-link span:hover {
  cursor: pointer;
  color: #e76453;
}

.bd-r {
  padding-right: 15px;
  margin: 0 15px 0 0;
  border-right: 1px solid #cdcdcd;
}

.footer {
  padding: 12px 0;
  font-size: 15px;
  background-color: #f0f0f0;
}

.coppy-right:hover,
.payment:hover {
  cursor: pointer;
  color: #e76453;
}

.footer-bottom {
  justify-content: space-between;
}

.contact-us {
  background-image: url(../../assets/banner/map.jpg);
  background-position-y: 75px;
  background-repeat: no-repeat;
}

#accordion {
  display: none;
}

@media (max-width: 1200px) {
  .footer-link {
    text-align: center;
  }

  .footer-bottom {
    justify-content: center;
    text-align: center;
    display: grid !important;
  }
}

@media (max-width: 991px) {
  #accordion {
    display: block;
  }

  .footer-menu {
    display: none;
  }

  .contact-us {
    background-position-y: 10px;
  }

  .card-body ul li {
    display: block;
    margin: 10px 0;
  }
}
</style>
