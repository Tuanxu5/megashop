<template>
  <div class="detail-product">
    <div class="container">
      <div class="content mt-5">
        <MainLeft></MainLeft>
        <div class="content-right">
          <div class="cart-right">
            <div class="d-flex">
              <span>Shopping Cart</span>
              <span>Home</span>
            </div>
            <div class="row">
              <div class="col-lg-8 col-xs-12">
                <div class="rounded-3 mt-2 border-color pt-4 pe-3">
                  <div class="px-3 pb-4" v-if="listProductCart.length == 0">
                    <span>There are no more items in your cart</span>
                  </div>
                  <div v-if="listProductCart != null">
                    <ListItemCart
                      v-for="itemProduct in listProductCart"
                      :item="itemProduct"
                      @plusQuality="plusQualityEvent"
                      @minusQuality="minusQualityEvent"
                    >
                    </ListItemCart>
                  </div>
                </div>
                <div class="d-flex ctn-shop mt-3">
                  <i class="fas fa-angle-left pe-1 mt-1"></i>Continue Shopping
                </div>
              </div>
              <div class="col-lg-4 col-xs-12">
                <div class="list-checkout border-color rounded-3 mt-2 p-3">
                  <div class="checkout-top">
                    <div class="justify-content-between d-flex">
                      <span>{{ shipPing }} items</span>
                      <span> ${{ useFormat(totalItem) }} </span>
                    </div>
                    <div class="justify-content-between d-flex">
                      <span>Shipping</span>
                      <span v-if="shipPing > 0">${{ shipPing }}.00</span>
                      <span v-if="shipPing == 0">Free</span>
                    </div>
                  </div>
                  <div class="mx-0 my-3">
                    <div class="justify-content-between d-flex">
                      <span>Total (tax excl.)</span>
                      <span>${{ useFormat(shipPing + totalItem) }}</span>
                    </div>
                    <div class="justify-content-between d-flex">
                      <span>Total (tax incl.)</span>
                      <span>${{ useFormat(shipPing + totalItem) }}</span>
                    </div>
                    <div class="justify-content-between d-flex">
                      <span>Taxes:</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <div>
                    <div class="justify-content-between d-flex">
                      <span>Total (tax excl.)</span>
                      <span>${{ useFormat(shipPing + totalItem) }}</span>
                    </div>
                    <div class="justify-content-between d-flex">
                      <span>Taxes</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <div class="justify-content-center d-flex">
                    <button
                      class="border-0 rounded mt-4 px-3 py-2 text-light"
                      @click="handleCheckout"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainLeft from "../Components/Model/Main/MainLeft.vue";
import ListItemCart from "../Components/CartPage/ListItemCart.vue";
import { useFormat } from "../Components/Composables/Format";
import { ref, Ref } from "vue";
import { DataProductCart, ItemCart } from "../Components/Model/Interface";

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
listProductCart.forEach(function (item: ItemCart): void {
  totalProduct += item.qualityProduct * item.pricePrice;
  shippingFee += item.qualityProduct;
});

var totalItem = ref(totalProduct);
var shipPing = ref(shippingFee);

// handle plus quality product in cart
function plusQualityEvent(dataProductCart: DataProductCart) {
  totalItem.value += dataProductCart.pricePrice;
  shipPing.value += 1;
}

//handle minus quality product in cart
function minusQualityEvent(dataProductCart: DataProductCart) {
  totalItem.value -= dataProductCart.pricePrice;
  shipPing.value -= 1;
}

//handle click check out
function handleCheckout() {
  alert("Do you have money to buy?");
}
</script>

<style scoped>
.border-color {
  border: 1px solid #cdcdcd;
}
.content {
  display: grid;
  grid-template-columns: 20.7% 76.5%;
  grid-gap: 2.8%;
}
.ctn-shop {
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.list-checkout {
  line-height: 25px;
  font-size: 13px;
}
.list-checkout button {
  background-color: #e76453;
}
@media (max-width: 991px) {
  .detail-product {
    margin-top: 101px;
  }
  .content {
    grid-template-columns: 100% 0%;
  }
  .content-left {
    display: none;
  }
}
</style>
