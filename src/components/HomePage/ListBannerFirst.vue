<script lang="ts" setup></script>
<template>
  <div class="main-banner1 mt-5">
    <div class="container flex-style">
      <div class="list-banner">
        <div class="single-banner">
          <div class="banner-bg">
            <img src="../../assets/banner/banner1.jpg" alt="" />
            <div class="banner-title">
              <span>Trending</span>
              <span>Shop Laptops</span>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div class="single-banner">
          <div class="banner-bg">
            <img src="../../assets/banner/banner2.jpg" alt="" />
            <div class="banner-title">
              <span>Trending</span>
              <span>Casual Sandals</span>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-banner {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
}
.list-banner .single-banner {
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ccc;
  border: 1px solid #ccc;
}
.banner-bg img {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  transition: all 0.5s ease;
}
.banner-title {
  line-height: 30px;
  z-index: 1000;
  position: absolute;
  top: 40px;
  left: 30px;
  display: grid;
}
.banner-title span:nth-child(1) {
  display: block;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 24px;
  margin: 0;
  text-transform: capitalize;
  font-weight: 400;
  color: #777777;
}
.banner-title span:nth-child(2) {
  font-size: 26px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 27px;
  display: block;
  letter-spacing: -0.2px;
  margin: 0;
  padding-top: 5px;
  color: #333;
}
.banner-title button {
  width: 109px;
  background-color: #e76453;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  line-height: 24px;
  padding: 5px 18px;
  text-align: center;
  border: none;
  margin-top: 15px;
}
.banner-title button:hover {
  background-color: #d95e4e;
}
.single-banner:hover img {
  transform: scale(1.1);
}
@media (max-width: 1199px) {
  .banner-title {
    top: 20px;
  }
}
@media (max-width: 991px) {
  .banner-title {
    top: 7px;
    left: 20px;
  }
  .banner-title span:nth-child(1) {
    font-size: 14px;
    line-height: 20px;
  }
  .banner-title span:nth-child(2) {
    font-size: 21px;
    line-height: 23px;
  }
  .banner-title button {
    padding: 3px 10px;
  }
}
@media (max-width: 767px) {
  .list-banner {
    display: grid;
    grid-template-columns: 100%;
  }
  .banner-title {
    top: 20px;
    left: 30px;
  }
  .banner-title span:nth-child(1) {
    font-size: 16px;
    line-height: 24px;
  }
  .banner-title span:nth-child(2) {
    font-size: 26px;
    line-height: 27px;
  }
  .banner-title button {
    padding: 5px 18px;
  }
}
</style>
