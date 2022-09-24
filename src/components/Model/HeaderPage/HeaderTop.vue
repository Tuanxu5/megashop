<template>
  <div class="header-top">
    <div class="container d-flex flex-style">
      <div class="logo-page mb-3">
        <img src="../../../assets/logo.svg" width="100%" />
      </div>
      <div class="program-page color-777 d-flex">
        <div class="free-shipping fs-11 p-0 d-flex border-end ps-3">
          <img src="../../../assets/Logo/truck.svg" width="25px" />
          <span class="d-block pe-3 ms-3">Free Shipping<br />Products</span>
        </div>
        <div class="money-back fs-11 d-flex border-end ps-3">
          <img src="../../../assets/Logo/Money.svg" width="23px" />
          <span class="d-block pe-3 ms-3">Money Back<br />Guarantee</span>
        </div>
        <div class="special-weekly fs-11 d-flex ps-3">
          <img
            style="margin-top: -2px"
            src="../../../assets/Logo/Offer.svg"
            width="23px"
          />
          <span class="d-block pe-3 ms-3"> Special Weekly<br />Offer</span>
        </div>
      </div>
      <div class="mt-2">
        <div class="d-flex phone-card justify-content-end pe-0 fs-12 py-3">
          <div class="phone-contact me-4">
            <img src="../../../assets/Logo/call.svg" height="20px" alt="" />
            <span class="lh-25 ms-1 mt-1">(+1) 256 8889 55</span>
          </div>
          <router-link to="/megashop/cart" class="t-direction-none">
            <div class="cart-page color-333">
              <i class="fas fa-shopping-cart fs-18"></i>
              <span class="ms-1 mt-1 lh-25">
                {{ shipPing }} Items - ${{ useFormat(totalItem) }}
              </span>
            </div>
          </router-link>
        </div>
        <div class="header-search rounded-top p-1 me-0">
          <input
            class="ol-none rounded-3 border-cd p-2 fs-12"
            type="text"
            placeholder="Search for all products ..."
          />
          <button
            class="button-search ms-1 bg-pri rounded-3 text-light fs-14 border-pri"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useFormat } from "../../../components/Composables/Format";
import { ItemCart } from "../Interface";

//check the existence of local storage listCart
var totalProduct = 0;
var shippingFee = 0;
var listProductCart: Array<ItemCart>;
if (localStorage.getItem("listCart")) {
  listProductCart = JSON.parse(localStorage.getItem("listCart") ?? "") || [];
} else {
  listProductCart = [];
}

//handle show item product to list cart from localStorage
listProductCart.forEach(function (item: ItemCart) {
  totalProduct += item.qualityProduct * item.pricePrice;
  shippingFee += item.qualityProduct;
});

var totalItem = ref(totalProduct);
var shipPing = ref(shippingFee);
</script>

<style scoped>
.phone-card .cart-page i {
  color: #c2d82e;
}
.header-top .logo-page {
  margin-top: 35px;
}
.header-top .program-page {
  margin-top: 38px;
}
.header-top .program-page .free-shipping,
.special-weekly,
.money-back {
  height: 32px;
}
.phone-contact img {
  margin-top: -3px;
  height: 20px;
  width: 20px;
}
.cart-page img {
  margin-top: -5px;
}
.header-search {
  background-color: #c2d82e;
}
.header-search input {
  width: 245px;
  height: 40px;
}
.button-search {
  width: 82px;
  height: 38px;
}
@media (max-width: 1199px) {
  .program-page {
    display: none !important;
  }
}
@media (max-width: 991px) {
  .header-top {
    display: none !important;
  }
}
</style>
