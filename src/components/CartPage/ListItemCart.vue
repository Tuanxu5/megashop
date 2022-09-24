<template>
  <div class="single-product mb-3">
    <div class="product-image">
      <img class="rounded-3" :src="props.item.imageProduct" alt="" />
    </div>
    <div class="product-about">
      <div class="product-name">{{ props.item.titleNameProduct }}</div>
      <div class="product-price">${{ item.pricePrice }}</div>
      <div class="dimension d-flex">
        <span>Dimension </span><span> : {{ props.item.dimensionProduct }}</span>
      </div>
    </div>
    <div class="product-quality d-flex">
      <input class="rounded-3" type="text" v-model="qualityProduct" disabled />
      <div class="button-increase">
        <button
          class="border-0 rounded-3 text-light"
          @click="handlePlusQuality"
        >
          <i class="fas fa-angle-up"></i>
        </button>
        <button
          class="border-0 rounded-3 text-light"
          @click="handleMinusQuality"
        >
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
    </div>
    <div class="product-price">
      ${{ useFormat(props.item.pricePrice * qualityProduct) }}
    </div>
    <div class="delete-product">
      <button class="text-light" @click="handleDeleteProduct">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";
import { useFormat } from "../Composables/Format";
import { ItemCart } from "../Model/Interface";

const emit = defineEmits(["plusQuality", "minusQuality"]);
const props = defineProps(["item"]);
var listProductCart: Array<ItemCart>;
if (localStorage.getItem("listCart")) {
  listProductCart = JSON.parse(localStorage.getItem("listCart") ?? "") || [];
} else {
  listProductCart = [];
}

//handle plus quality product in cart
var qualityProduct = ref(props.item.qualityProduct);
function handlePlusQuality() {
  for (let x of listProductCart) {
    if (
      x.idProduct == props.item.idProduct &&
      x.dimensionProduct == props.item.dimensionProduct
    ) {
      x.qualityProduct += 1;
    }
  }
  qualityProduct.value += Number(1);
  var dataProductCart = {
    qualityProduct: qualityProduct.value,
    pricePrice: props.item.pricePrice,
  };
  localStorage.setItem("listCart", JSON.stringify(listProductCart));
  emit("plusQuality", dataProductCart);
}

//handle minus quality product in cart
function handleMinusQuality() {
  if (qualityProduct.value > 1) {
    for (let x of listProductCart) {
      if (
        x.idProduct == props.item.idProduct &&
        x.dimensionProduct == props.item.dimensionProduct
      ) {
        x.qualityProduct -= 1;
      }
    }
    qualityProduct.value -= 1;
    var dataProductCart: Object = {
      qualityProduct: qualityProduct.value,
      pricePrice: props.item.pricePrice,
    };
    localStorage.setItem("listCart", JSON.stringify(listProductCart));
    emit("minusQuality", dataProductCart);
  }
}

//handle delete product in cart
function handleDeleteProduct() {
  var question = confirm("Do you have delete this product?");
  if (question) {
    listProductCart = listProductCart.filter(
      (x) =>
        x.idProduct != props.item.idProduct ||
        (x.idProduct == props.item.idProduct &&
          x.dimensionProduct != props.item.dimensionProduct)
    );
    localStorage.setItem("listCart", JSON.stringify(listProductCart));
    location.reload();
  }
}
</script>

<style scoped>
.single-product > .product-price {
  padding-top: 35px;
  color: #e76453;
}
.product-image {
  padding: 0px 10px 10px 30px;
}
.product-image img {
  width: 70px;
  height: 90px;
}
.single-product {
  display: grid;
  grid-template-columns: 20% 32% 15% 15% 10%;
  grid-gap: 3%;
}
.product-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.product-about .product-price {
  color: #e76453;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 20px;
}
.product-about {
  margin-top: 5px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}
.dimension {
  font-size: 12px;
}
.product-quality input {
  background-color: #fff;
  color: #414141;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  width: 55px;
  height: 45px;
  border: 1px solid #cdcdcd;
  margin-top: 25px;
}
.button-increase button {
  width: 20px;
  height: 20px;
  background-color: #e76453;
}
.button-increase {
  margin-top: 25px;
  margin-left: 5px;
  width: 20px;
  height: 20px;
}
.delete-product button {
  background-color: #e76453;
  border: none;
  padding: 3px 8px;
  border-radius: 100px;
  margin-top: 30px;
}
</style>
