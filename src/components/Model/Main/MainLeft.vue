<template>
  <div class="content-left">
    <div class="top-banner">
      <img class="rounded-3 w-100" src="../../../assets/banner/banner6.jpg" />
    </div>
    <div class="border-cd mt-5 rounded-3 h-auto bg-light py-2 px-3">
      <div class="title tl-center color-primary border-bottom pb-2 mb-3">
        New Products
      </div>
      <div class="d-flex mb-2" v-for="product in 3">
        <div class="product-image">
          <img
            class="rounded-3 border"
            src="../../../assets/HomeProduct/pr1.jpg"
          />
        </div>
        <div class="d-grid lh-10 ps-1">
          <div class="lh-15 fs-13">Massa quam a...</div>
          <div class="product-vote">
            <i class="fas fa-star" v-for="star in 5"></i>
          </div>
          <div class="lh-20 fw-500 d-grid">
            <span class="color-primary fs-13">$135.00</span>
            <del class="text-muted fs-13">$150.00</del>
          </div>
        </div>
      </div>
    </div>
    <div class="bot-banner mt-5">
      <img class="rounded-3 w-100" src="../../../assets/banner/banner7.jpg" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.title {
  font-size: 18px;
}
.product-image {
  width: 60%;
}
.product-image img {
  width: 82px;
  height: 100px;
}
</style>
