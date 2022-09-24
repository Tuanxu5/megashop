<template>
  <div class="main-banner2 mt-5">
    <div class="container flex-style">
      <div class="list-banner">
        <div class="single-banner">
          <div class="banner-bg">
            <img src="../../assets/banner/banner3.jpg" alt="" />
            <div class="banner-title">
              <span>Trending</span>
              <span>Shop Laptops</span>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div class="single-banner">
          <div class="banner-bg">
            <img src="../../assets/banner/banner4.jpg" alt="" />
            <div class="banner-title">
              <span>Trending</span>
              <span>Ceramic Items</span>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div class="single-banner">
          <div class="banner-bg">
            <img src="../../assets/banner/banner5.jpg" alt="" />
            <div class="banner-title">
              <span>Trending</span>
              <span>Auto parts</span>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.list-banner {
  display: grid;
  grid-template-columns: calc(96% / 3) calc(96% / 3) calc(96% / 3);
  grid-gap: 2%;
}

.list-banner .single-banner {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ccc;
  border: 1px solid #ccc;
}

.banner-bg {
  position: relative;
  overflow: hidden;
}

.banner-bg img {
  width: 100%;
  width: 100%;
  position: relative;
  border-radius: 5px;
  transition: all 0.5s ease;
}

.banner-title {
  z-index: 1000;
  position: absolute;
  top: 18%;
  left: 8%;
  display: grid;
}

.banner-title span:nth-child(1) {
  font-size: 16px;
  color: rgb(129, 129, 129);
}

.banner-title span:nth-child(2) {
  font-size: 26px;
  margin: 2px 0 10px 0;
}

.banner-title button {
  width: 109px;
  background-color: #e76453;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-family: inter;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 24px;
  padding: 5px 18px;
  text-align: center;
  text-transform: capitalize;
  border: none;
}

.single-banner:hover img {
  transform: scale(1.1);
}

.banner-title button:hover {
  background-color: #d95e4e;
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
    width: 90px;
    padding: 2px 5px;
  }
}

@media (max-width: 767px) {
  .list-banner {
    padding: 0 60px;
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
    width: 109px;
    padding: 5px 18px;
  }
}
</style>
