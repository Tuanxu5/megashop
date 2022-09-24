<template>
  <div class="single-product">
    <div class="product-image">
      <span class="product-sale"> -10%</span>
      <div class="check-button">
        <div class="d-flex">
          <span><i class="fas fa-shopping-cart"></i></span>
          <span><i class="fas fa-eye"></i></span>
          <span><i class="fas fa-heart"></i></span>
        </div>
      </div>
      <img
        class="product-image1"
        src="../../../assets/HomeProduct/pr1.jpg"
        alt=""
      />
      <img
        class="product-image2"
        src="../../../assets/HomeProduct/pr2.jpg"
        alt=""
      />
    </div>
    <div class="product-info">
      <div class="product-name">Goodbye Dolor teachers risus...</div>
      <div class="product-vote">
        <i class="fas fa-star" v-for="star in 5"></i>
      </div>
      <div class="product-money d-flex">
        <span>$116.00</span>
        <del>$129.00</del>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.list-product .single-product {
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
.list-product .single-product img {
  border-radius: 5px 5px 0 0;
  width: 204px;
  height: 204px;
}
.product-info .product-name {
  font-size: 13px;
  padding: 10px 10px 0 10px;
}
.product-info .product-vote {
  color: #ffc300;
  padding: 5px 0;
  font-size: 10px;
}
.product-money {
  padding: 5px 45px;
  justify-content: space-around;
  margin-bottom: 15px;
  font-weight: 600;
}
.product-money span {
  color: rgb(172, 23, 23);
  font-size: 13px;
}
.product-money del {
  color: #777;
  font-size: 13px;
}
.product-sale {
  color: #fff;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 6px;
  background-color: #e76453;
  position: absolute;
  top: 2%;
  left: 2%;
}
.check-button {
  z-index: 1000;
  color: #fff;
  left: 18%;
  top: 27%;
  position: absolute;
  display: none;
}
.check-button span {
  line-height: 40px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #e76453;
  border-radius: 50px;
  margin: 3px;
}
.check-button span:hover {
  background-color: #d95e4e;
}
.list-product .single-product:hover .check-button {
  display: block;
}
.product-image2 {
  top: 0;
  left: 0;
  position: absolute;
  transition: all 0.5s ease;
  transform: scaleX(0);
}
.list-product .single-product:hover .product-image1 {
  transition: all 0.5s ease;
  transform: scaleX(0);
  background-color: #f7f7f7;
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
    transition: all 0.5s ease;
    left: 0 !important;
  }
}
@media (max-width: 991px) {
  .prd-featured {
    transition: all 0.5s ease;
    left: 0 !important;
  }
}
@media (max-width: 767px) {
  .list-product .single-product img {
    width: 220px;
    height: 220px;
  }
  .prd-featured {
    transition: all 0.5s ease;
    left: 0 !important;
  }
}
</style>
