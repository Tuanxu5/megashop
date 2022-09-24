<template>
  <div class="content__right">
    <div class="product__section">
      <div class="product__section--title">
        <span>Home / </span>
        <span>{{ listDetailProduct.category }} / </span>
        <span>{{ listDetailProduct.title }}</span>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="product__image--full border-cd tl-center rounded-3">
            <img id="imageFull" v-bind:src="listDetailProduct.image" alt="" />
          </div>
          <div class="product__image--small d-grid pos-rel">
            <span class="tl-center justify-content-center"
              ><i class="fas fa-angle-left"></i
            ></span>
            <img
              @click="handleSelectImage"
              v-bind:src="listDetailProduct.image"
            />
            <img
              v-on:click="handleSelectImage"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
            <img
              v-on:click="handleSelectImage"
              src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
            />
            <span class="tl-center justify-content-center"
              ><i class="fas fa-angle-right"></i
            ></span>
          </div>
        </div>
        <div class="col-md-7">
          <div class="product__top">
            <div class="product__top--name">
              {{ listDetailProduct.title }}
            </div>
            <div class="product__top--vote">
              <i class="fas fa-star" v-for="star in 5"></i>
            </div>
            <div class="product__top--price">
              ${{ listDetailProduct.price }}
            </div>
          </div>
          <div class="product__bottom">
            <div class="product__bottom--description">
              {{ listDetailProduct.description }}
            </div>
            <div class="product__bottom--dimension">
              <span>Dimension</span>
              <select name="" id="" v-model="dimensionProduct">
                <option value="40 x 60cm">40 x 60cm</option>
                <option value="60 x 80cm">60 x 80cm</option>
                <option value="60 x 100cm">60 x 100cm</option>
              </select>
            </div>
            <div class="product__bottom--quality">
              <span>Quality</span>
              <input
                style="text-align: center"
                type="text"
                v-model="qualityProduct"
                disabled
              />
              <div style="display: grid">
                <button @click="handleIncreaseQuantity">
                  <i class="fas fa-angle-up"></i>
                </button>
                <button v-on:click="handleReduceQuantity">
                  <i class="fas fa-angle-down"></i>
                </button>
              </div>
            </div>
            <div class="d-flex">
              <div class="product__bottom--addToCart">
                <button @click="addToCart">
                  <i class="fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
              <div class="product__bottom--zoom">
                <button><i class="fas fa-expand-alt"></i></button>
              </div>
              <div class="product__bottom--loveList">
                <button><i class="fas fa-heart"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <nav>
          <div class="nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">
            <button
              class="nav-link active mr-1"
              id="nav-des-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Description
            </button>
            <button
              class="nav-link product-detail"
              id="nav-pro_detail-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Product Details
            </button>
            <button
              class="nav-link"
              id="nav-rating-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Rating
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel">
            My mother is a person I admire most. She devoted a lot of time and
            energy to the upbringing of my two brothers and I. Despite working
            hard, she always made time to teach us many useful things which are
            necessary and important in our later lives. Moreover, she is a good
            role model for me to follow. She always tries to get on well with
            people who live next door and help everyone when they are in
            difficulties, so most of them respect and love her.
          </div>
          <div
            class="tab-pane fade product-details"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div class="logo" id="">
              <img src="../../assets/logo/logo1.jpg" alt="" />
            </div>
            <div class="reference">
              <span>Reference</span>
              <span>demo_6</span>
            </div>
            <div class="in-stock">
              <span>In stock</span>
              <span>demo_6</span>
            </div>
            <div class="data_sheet">
              <span>Data sheet</span>
              <div class="f-flex row">
                <span class="composition col-sm-5">Composition</span>
                <span class="matt_paper col-sm-5">Matt paper</span>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <div class="row">
              <div class="col-sm-2 border-end rating-left">
                <span>Grade</span>
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <span>admin</span>
                <i>09/10/2021</i>
              </div>
              <div class="col-sm-10 rating-right">
                <span>Best Products</span>
                <p>
                  My mother is a person I admire most. She devoted a lot of time
                  and energy to the upbringing of my two brothers and I. Despite
                  working hard, she always made time to teach us many useful
                  things which are necessary and important in our later live
                </p>
              </div>
            </div>
            <button class="mt-4 write-y-u">Write Your Review</button>
          </div>
        </div>
      </div>
      <div class="list-product">
        <div class="single-product" v-for="num in 4">
          <div class="product-image">
            <span class="sale">-10%</span>
            <img src="../../assets/homeProduct/pr1.jpg" alt="" />
            <img src="../../assets/homeProduct/pr2.jpg" alt="" />
            <div class="pr-cart d-flex">
              <span><i class="fas fa-shopping-cart"></i></span>
              <span><i class="fas fa-eye"></i></span>
              <span><i class="fas fa-heart"></i></span>
            </div>
          </div>
          <div class="product-about">
            <div class="product-name">Hello Vitae Goodbye dictum...</div>
            <div class="product-vote">
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
            </div>
            <div class="product-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
          </div>
        </div>
      </div>
      <div class="list-product-title" style="margin-top: 60px">
        <span>16 Other Products In The Same Category:</span>
        <div class="tab-left-right">
          <span><i class="fas fa-angle-left"></i></span>
          <span><i class="fas fa-angle-right"></i></span>
        </div>
      </div>
      <div class="list-product" style="margin-top: 20px">
        <div class="single-product" v-for="number in 4">
          <div class="product-image">
            <span class="sale">-10%</span>
            <img src="../../assets/homeProduct/pr9.jpg" alt="" />
            <img src="../../assets/homeProduct/pr1.jpg" alt="" />
            <div class="pr-cart d-flex">
              <span><i class="fas fa-shopping-cart"></i></span>
              <span><i class="fas fa-eye"></i></span>
              <span><i class="fas fa-heart"></i></span>
            </div>
          </div>
          <div class="product-about">
            <div class="product-name">Vitae Goodbye see you dictum...</div>
            <div class="product-vote">
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
            </div>
            <div class="product-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { ListProduct } from "../../components/Model/Interface";
import { ItemCartDetail } from "../Model/Interface";
import { ItemCart } from "../Model/Interface";

const route = useRoute();
const dimensionProduct = ref("40 x 60cm");

// Handle fetch detail product
const listDetailProduct: ListProduct = reactive({});
const idProduct = route.params.id;
const errorMessage = ref(null);

fetch("https://fakestoreapi.com/products/" + idProduct)
  .then((response) => response.json())
  .then((data: ListProduct) => {
    Object.assign(listDetailProduct, data);
    console.log(listDetailProduct);
  })
  .catch((err) => (errorMessage.value = err));

// Handle increase the number of products
var qualityProduct = ref(1);
function handleIncreaseQuantity() {
  qualityProduct.value += 1;
}

// Handle reduce the number of products
function handleReduceQuantity() {
  if (qualityProduct.value > 1) {
    qualityProduct.value -= 1;
  }
}

//Handle select image
function handleSelectImage(smallImg: any) {
  var fullImg: any = document.getElementById("imageFull");
  fullImg.src = smallImg.target.src;
  console.log(fullImg);
}

// Handle add product to cart
function addToCart() {
  let addProductToCart: ItemCartDetail = {
    idProduct: listDetailProduct.id,
    imageProduct: listDetailProduct.image,
    titleNameProduct: listDetailProduct.title,
    pricePrice: listDetailProduct.price,
    qualityProduct: qualityProduct.value,
    dimensionProduct: dimensionProduct.value,
  };
  var listProductCart: Array<ItemCartDetail>;
  if (localStorage.getItem("listCart") == null) {
    listProductCart = [addProductToCart];
  } else {
    listProductCart = JSON.parse(localStorage.getItem("listCart") ?? "") || [];
    let ok = true;
    for (var x of listProductCart) {
      if (
        x.idProduct == listDetailProduct.id &&
        x.dimensionProduct == dimensionProduct.value
      ) {
        x.qualityProduct += qualityProduct.value;
        ok = false;
        break;
      }
    }
    if (ok) {
      listProductCart.push(addProductToCart);
    }
  }
  localStorage.setItem("listCart", JSON.stringify(listProductCart));
  alert("You have add product " + listDetailProduct.title + " to cart");
}
</script>

<style scoped>
.product__image--full img {
  width: 60%;
  height: 360px;
  padding: 75px 0;
}
.product__image--small {
  grid-template-columns: 6% 28.66% 28.66% 28.66% 6%;
  grid-gap: 0.5%;
  padding: 20px 0px;
}
.product__image--small img {
  width: 88px;
  height: 88px;
  padding: 15px 15px;
  cursor: pointer;
}
.product__image--small span:nth-child(5) {
  background: #e76453;
  color: #fff;
  text-align: center;
  height: 20px;
  font-size: 15px;
  margin-top: 40px;
  width: 20px;
  border-radius: 100%;
  margin-left: -15px;
  z-index: 1000;
}
.product__image--small span:nth-child(1) {
  background: #e76453;
  color: #fff;
  text-align: center;
  height: 20px;
  font-size: 15px;
  margin-top: 40px;
  width: 20px;
  border-radius: 100%;
  margin-left: 15px;
  z-index: 1000;
}
.product__image--small img {
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #cdcdcd;
  margin: 5px;
}
.product__top {
  padding: 6px 0;
  border-bottom: 1px solid #e0e0e0;
}
.product__top .product__top--name {
  font-size: 20px;
}
.product__top .product__top--vote {
  font-size: 12px;
  margin: 8px 0;
  color: #ffc300;
}
.product__top .product__top--price {
  font-size: 19px;
  color: #e76453;
}
.product__bottom {
  padding: 10px 0;
}
.product__bottom .product__bottom--description {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 13.5px;
  text-align: justify;
  color: #333;
}
.product__bottom .product__bottom--dimension {
  margin: 20px 0;
}

.product__bottom .product__bottom--dimension span {
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 24px;
  margin: 5px 0px 0px;
}
.product__bottom .product__bottom--dimension select {
  align-items: center;
  background-position: right 8px 50%;
  background-size: 20px 20px;
  border-radius: 5px;
  border: 1px solid #cdcdcd;
  color: #888888;
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  margin-left: 20px;
  padding: 5px 5px 5px 7px;
}
.product__bottom .product__bottom--dimension select:focus {
  outline: none;
}
.product__bottom .product__bottom--quality {
  margin: 20px 0;
  display: flex;
}
.product__bottom .product__bottom--quality span {
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 24px;
  margin: 10px 40px 5px 0px;
}
.product__bottom .product__bottom--quality input {
  width: 50px;
  align-items: center;
  background-size: 20px 20px;
  background: #fff;
  border: 1px solid #cdcdcd;
  color: #888888;
  font-size: 14px;
  line-height: 18px;
  border-radius: 5px;
  margin: 1px 5px;
}
.product__bottom .product__bottom--quality button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #e76453;
  margin: 1px;
  font-weight: 400;
  background-color: #e76453;
  color: #fff;
  border-radius: 5px;
}
.product__bottom--addToCart button {
  align-items: flex-start;
  background-color: #e76453;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 24px;
  padding: 7px 20px;
  text-align: center;
  border: none;
  text-transform: capitalize;
}
.product__bottom--zoom button {
  background-color: #e76453;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  margin: 0 15px;
}
.product__bottom--loveList button {
  background-color: #e76453;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
}
.tab-content {
  border: 1px solid #cdcdcd;
  margin: 0 12px;
  width: 97%;
  border-radius: 0px 5px 5px 5px;
  padding: 30px;
  font-size: 13.5px;
  text-align: justify;
  color: #333;
}
.nav-tabs .nav-tabs {
  border: none;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-radius: 5px 5px 0 0;
  background-color: #e76453;
  color: #fff;
  border: none;
}
.nav-tabs .nav-link {
  padding: 10px 30px;
  border: none;
  background: #eee;
  color: #333;
}
.product-detail {
  margin: 0 10px;
}
.product-details .reference {
  margin: 15px 0 5px 0;
}
.product-details .reference span:nth-child(1) {
  color: #414141;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 10px 0px 0px;
  text-align: right;
}
.product-details .in-stock {
  margin: 0px 0 5px 0;
}
.product-details .in-stock span:nth-child(1) {
  color: #414141;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 10px 0px 0px;
  text-align: right;
}
.product-details .data_sheet {
  margin: 0px 0 5px 0;
}
.product-details .data_sheet > span:nth-child(1) {
  color: #414141;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 10px 0px 0px;
  text-align: right;
}
.composition {
  background-color: #ebebeb;
  color: #333333;
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 24px;
  margin: 10px 10px 0px 10px;
  padding: 10px 20px;
  text-align: left;
  border-radius: 5px;
}
.matt_paper {
  background-color: #ebebeb;
  color: #333333;
  display: inline-table;
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 24px;
  margin: 10px 0px 0px 0px;
  padding: 10px 20px;
  text-align: left;
  text-transform: capitalize;
  border-radius: 5px;
}
.rating-left span:nth-child(1) {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}
.rating-left span:nth-child(2) i {
  font-size: 10px;
  color: #ffc300;
  margin-bottom: 5px;
}
.rating-left span:nth-child(3) {
  font-weight: 600;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
.rating-left span:nth-child(7) {
  color: rgb(137, 137, 137);
}
.rating-right span:nth-child(1) {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}
.write-y-u {
  background-color: #d95e4e;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 24px;
  padding: 7px 20px;
  text-align: center;
  text-transform: capitalize;
  border: none;
}
.product__section--title {
  color: #e76453;
  font-size: 15px;
  margin-bottom: 20px;
}
.product__section--title span:hover {
  color: #333;
  cursor: pointer;
}
.list-product {
  border-radius: 5px;
  margin-top: 60px;
  background-color: #f6f6f6;
  border: 1px solid #cdcdcd;
  padding: 20px;
  display: grid;
  grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
  grid-gap: 2%;
}
.single-product {
  cursor: pointer;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
}
.product-image {
  position: relative;
}
.product-image > span:nth-child(1) {
  top: 0px;
  background-color: #e76453;
  border-radius: 5px;
  padding: 1px 5px;
  color: #fff;
  left: 0px;
  font-size: 12px;
  z-index: 1000;
  position: absolute;
}
.product-image .pr-cart {
  position: absolute;
  top: 70px;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  z-index: 1000;
  transition: all 0.5s ease;
  display: none !important;
}
.product-image .pr-cart span {
  background-color: #e76453;
  padding: 5px 8px;
  border-radius: 100px;
  margin: 5px;
}
.product-image img {
  width: 100%;
}
.product-name {
  font-size: 13px;
}
.product-vote {
  margin: 10px 0;
  color: #ffc300;
  font-size: 10px;
}
.product-price {
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}
.product-price span:nth-child(1) {
  color: #d95e4e;
  font-size: 14px;
}
.product-price del {
  color: #959595;
  font-size: 14px;
}
.single-product:hover .pr-cart {
  display: block !important;
}
.single-product:hover img:nth-child(2) {
  transition: all 0.5s ease;
  transform: scaleX(0);
}
.single-product:hover .pr-cart {
  transition: all 0.5s ease;
  display: block !important;
}
.single-product:hover img:nth-child(3) {
  transition: all 0.5s ease;
  transform: scaleX(1);
}
.single-product:hover .sale {
  transition: all 0.5s ease;
  transform: scale(0);
}
.product-image img:nth-child(3) {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  transform: scaleX(0);
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
.list-product-title {
  display: flex;
  justify-content: space-between;
}
.list-product-title > span:nth-child(1) {
  font-size: 20px;
  color: #e76453;
}
@media (max-width: 1199px) {
  .product__image--small img {
    width: 72px;
    height: 72px;
  }
  .product__image--small span:nth-child(1) {
    margin-top: 32px;
  }
  .product__image--small span:nth-child(5) {
    margin-top: 32px;
  }
}
@media (max-width: 991px) {
  .product__image--full img {
    width: 60%;
    height: 450px;
    padding: 75px 0;
  }
  .content__right {
    margin-top: 71px;
  }
  .list-product {
    overflow: hidden;
    padding: 20px;
    display: flex;
    grid-gap: 20px;
  }
  .product-image img {
    width: 183px;
    height: 183px;
  }
  .product-price {
    padding: 0px 30px;
  }
}
@media (max-width: 767px) {
  .product__image--full img {
    width: 60%;
    height: 360px;
    padding: 75px 0;
  }
  .product-price {
    padding: 0px 40px;
  }
  .composition {
    margin-left: 10px;
  }
  .border-end {
    border-right: none !important;
  }
  .matt_paper {
    margin-left: 10px;
  }
  .rating-right span[data-v-0f136948]:nth-child(1) {
    margin-top: 20px;
  }
  .tab-content {
    width: 95.5%;
  }
  .list-product {
    overflow: hidden;
    padding: 16x;
    display: flex;
    grid-gap: 20px;
  }
  .product-image img {
    width: 205px;
    height: 205px;
  }
  .product__image--small {
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }
  .product__image--small span:nth-child(1) {
    margin-left: 0;
  }
  .product__image--small span:nth-child(5) {
    margin-left: 0;
  }
}
</style>
