<template>
  <div class="main-new-product mt-5">
    <div class="container flex-style">
      <div class="d-flex mb-4 title-name">
        <ul class="nav nav-tabs" style="border: none">
          <li>
            <span class="nav-link active">New Product</span>
          </li>
        </ul>
        <div class="tab-left-right">
          <span><i class="fas fa-angle-left"></i></span>
          <span><i class="fas fa-angle-right"></i></span>
        </div>
      </div>
      <div class="tab-content">
        <div>
          <div class="list-product">
            <ProductFiveInList v-for="product in 5"></ProductFiveInList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductFiveInList from "../Model/Product/ProductFiveInList.vue";
</script>

<style scoped>
.list-product {
  overflow: hidden;
  background: #f6f6f6;
  height: auto;
  display: flex;
  overflow: hidden;
  padding: 14px;
  grid-gap: 14px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
.main-new-product ul > li:nth-child(1) {
  height: 20px;
  margin-top: 3px;
  cursor: pointer;
}
.main-new-product ul > li:nth-child(1) > span {
  display: block;
  margin-top: -3px;
}
.main-new-product ul > li:nth-child(2) {
  cursor: pointer;
  display: block;
  margin-top: 3px;
}
.main-new-product ul > li > span {
  display: block;
  margin-top: -3px;
  padding-right: 10px;
  font-size: 20px;
}
.title-name {
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav-tabs .nav-link.active {
  color: #e76453;
  background-color: #fff;
  border: none;
  padding: 0 10px 0 0;
}
.nav-tabs .nav-link {
  color: #000;
  background-color: #fff;
  border: none;
  padding: 0 10px 0 0;
}
.nav-tabs .nav-link:hover {
  color: #e76453;
}
.tab-left-right span:first-child {
  padding: 5px 12px;
  border-radius: 50px;
  background-color: #f5f5f5;
}
.tab-left-right span:last-child {
  margin-left: 5px;
  padding: 5px 12px;
  border-radius: 50px;
  background-color: #f5f5f5;
}
.tab-left-right span:hover {
  background-color: #e76453;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 1200px) {
  .list-product {
    padding: 22px;
    grid-gap: 22px;
    display: flex;
    align-items: center;
  }
}
@media (max-width: 991px) {
  .list-product {
    padding: 19.1px;
    grid-gap: 19.1px;
  }
}
@media (max-width: 767px) {
  .list-product {
    display: flex;
    grid-gap: 23.4px;
    padding: 23.4px 23.4px;
  }
  .tab-left-right {
    margin-top: 10px;
    text-align: center;
    justify-content: center;
  }
  .title-name {
    display: grid !important;
    justify-content: center;
  }
  .tab-left-right {
    text-align: center;
  }
  .main-new-product ul > li:nth-child(1) {
    padding-left: 10px;
    margin-bottom: 10px;
  }
}
</style>
