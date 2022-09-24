<template>
  <div
    class="single-product prd-featured tl-center bg-fff rounded-3 tran-default pos-rel border cursor-pointer"
  >
    <div class="product-image">
      <span
        class="product-sale fs-11 text-light rounded-3 bg-pri pos-abs z-1000"
      >
        -10%
      </span>
      <div class="check-button text-light w-100 pos-abs d-none z-1000">
        <div class="d-flex">
          <span><i class="fas fa-shopping-cart"></i></span>
          <!-- <router-link
            :to="{
              name: 'detailProduct',
              params: {
                id: props.item.id,
              },
            }"
            ><span><i class="far fa-eye"></i></span>
          </router-link> -->
          <span><i class="fas fa-heart"></i></span>
        </div>
      </div>
      <img class="product-image1" v-bind:src="props.item.image" />
      <img
        class="product-image2 pos-abs tran-default top-0 left-0"
        src="../../assets/HomeProduct/pr1.jpg"
      />
    </div>
    <div class="product-info">
      <div class="product-name text-hidden-3dot fs-13 pt-2 pe-2 ps-2 pb-0">
        {{ props.item.title }}
      </div>
      <div class="product-vote py-1">
        <i class="fas fa-star" v-for="num in 5"></i>
      </div>
      <div class="product-money d-flex fw-600 f-13 mb-3 justify-content-center">
        <span class="color-pri me-1 fs-12 my-1"
          >${{ useFormat(props.item.price) }}</span
        >
        <del class="color-777 ms-1 fs-12 my-1"
          >${{ useFormat(1.1 * props.item.price) }}</del
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFormat } from "../Composables/Format";

const props = defineProps(["item"]);
</script>

<style scoped>
.list-product .single-product .product-image1 {
  width: 100px;
  height: 115px;
  margin: 45px 52px;
}
.list-product .single-product img {
  width: 204px;
  height: 204px;
}
.product-sale {
  padding: 2px 7px;
  top: 2%;
  left: 2%;
}
.check-button {
  left: 18%;
  top: 27%;
}
.check-button span {
  color: #fff;
  line-height: 40px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #e76453;
  border-radius: 50px;
  margin: 5px;
}
.check-button span:hover {
  background-color: #d95e4e;
}
.list-product .single-product:hover .check-button {
  display: block !important;
}
.product-image2 {
  transform: scaleX(0);
}
.list-product .single-product:hover .product-image1 {
  transition: all 0.5s ease;
  transform: scaleX(0);
}
.list-product .single-product:hover .product-image2 {
  transition: all 0.5s ease;
  transform: scaleX(1);
}
.list-product .single-product:hover .product-sale {
  display: none;
}
@media (max-width: 1199px) {
  .prd-featured {
    left: 0 !important;
  }
}
@media (max-width: 767px) {
  .list-product .single-product .product-image1 {
    width: 146px;
    height: 146px;
    margin: 37px;
  }
  .list-product .single-product img {
    width: 220px;
    height: 220px;
  }
}
</style>
