<template>
  <div class="main-featured-product mt-5">
    <div class="container">
      <div class="d-flex mb-4 title-name">
        <ul class="nav nav-tabs border-0">
          <li class="nav-item border-end">
            <span
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#featured"
              >Featured Product</span
            >
          </li>
          <li class="nav-item">
            <span class="nav-link" data-bs-toggle="tab" data-bs-target="#best">
              Best Seller Product
            </span>
          </li>
        </ul>
        <div class="tab-left-right mt-1">
          <span class="me-1" @click="handleClickPrev"
            ><i class="fas fa-angle-left"></i
          ></span>
          <span @click="handleClickNext" class="btn-next-pr"
            ><i class="fas fa-angle-right"></i
          ></span>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="featured">
          <div class="list-product bg-f6 of-hidden d-flex rounded-3 border">
            <ProductFeatured
              v-for="item in listProductFeatured"
              :key="listProductFeatured.id"
              :item="item"
            ></ProductFeatured>
          </div>
        </div>
        <div class="tab-pane fade" id="best">
          <div class="list-product bg-f6 of-hidden d-flex rounded-3 border">
            <ProductFiveInList v-for="item in 5"></ProductFiveInList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductFiveInList from "../Model/Product/ProductFiveInList.vue";
import { reactive } from "vue";
import ProductFeatured from "../HomePage/ProductFeatured.vue";
import { ListProduct } from "../Model/Interface";

//handle fetch product featured
const listProductFeatured: ListProduct = reactive({});

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    Object.assign(listProductFeatured, data);
  });
console.log(listProductFeatured);
let classProductFeatured: any = document.getElementsByClassName("prd-featured");
const countProductList: number = 1;
let l: number = 0;
const movePer: number = 20.25;
const maxMove: number = 320;

//handle click prev product in list
function handleClickPrev() {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of classProductFeatured) {
    if (countProductList > 1) {
      i.style.left = "-" + l + "%";
    }
  }
}

//handle click next product in list
function handleClickNext() {
  l = l + movePer;
  if (classProductFeatured == 1) {
    l = 0;
  }
  for (const i of classProductFeatured) {
    if (l > maxMove) {
      l = l - movePer;
      if (l > 300) {
        l = 0;
      }
    }
    i.style.left = "-" + l + "%";
  }
}
</script>

<style scoped>
.list-product {
  padding: 14px;
  grid-gap: 14px;
}
.main-featured-product ul > li {
  margin-top: 3px;
  cursor: pointer;
}
.main-featured-product ul > li > span {
  font-size: 20px;
}
.title-name {
  justify-content: space-between;
}
.nav-tabs .nav-link.active {
  color: #e76453;
  background-color: #fff;
  border: none;
}
.nav-tabs .nav-link {
  color: #000;
  border: none;
}
.nav-tabs .nav-link:hover {
  color: #e76453;
}
.tab-left-right span {
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 50px;
  background-color: #f5f5f5;
}
.tab-left-right span:hover {
  background-color: #e76453;
  color: #fff;
}
.nav-tabs .nav-link {
  padding: 0 10px 0 10px;
}
.nav-tabs .nav-link.active {
  padding: 0 10px 0 10px;
}
@media (max-width: 1199px) {
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
  .main-featured-product ul > li:nth-child(1) {
    padding-left: 10px;
    margin-bottom: 10px;
  }
}
</style>
