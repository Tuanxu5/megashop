<template>
  <div class="main-slide">
    <div class="d-flex flex-style">
      <ul class="list-slide">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide overflow-hidden"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="../../assets/slide1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <span>Tracking Item</span>
                <h1>Shop Best Offers</h1>
                <h1>On Sofa Set</h1>
                <button>Shop Now</button>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="../../assets/slide2.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <span>Tracking Item</span>
                <h1>Home Automation</h1>
                <h1>Perfact Tool</h1>
                <button>Shop Now</button>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../../assets/slide3.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <span>Tracking Item</span>
                <h1>For Smart Home</h1>
                <h1>Devices Set</h1>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span style="color: black; background-color: #fff"
              ><i class="fas fa-angle-left"></i
            ></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span style="color: black; background-color: #fff"
              ><i class="fas fa-angle-right"></i
            ></span>
          </button>
        </div>
      </ul>
    </div>
    <div class="list-sevice">
      <div class="container d-flex flex-style">
        <div class="col-lg-6 col-xl-3 col-12">
          <div class="sevice1">
            <div class="sevice-icon"><i class="fas fa-dollar-sign"></i></div>
            <div class="sevice-details">
              <span>Upto Flat 5% Reward</span><br />
              <span>On Your Shipping</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-12">
          <div class="sevice2">
            <div class="sevice-icon"><i class="fas fa-exchange-alt"></i></div>
            <div class="sevice-details">
              <span>Fast&Easy Extended</span><br />
              <span>Extended Returned</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-12">
          <div class="sevice3">
            <div class="sevice-icon"><i class="fas fa-thumbs-up"></i></div>
            <div class="sevice-details">
              <span>Free Delivery Schedule</span><br />
              <span>Spread Cheer Time</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-12">
          <div class="sevice4">
            <div class="sevice-icon"><i class="fas fa-gift"></i></div>
            <div class="sevice-details">
              <span>Special Gift On $100</span><br />
              <span>For All Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.main-slide .list-slide {
  list-style-type: none;
  padding: 0px;
  position: relative;
}
.main-slide .list-slide > li > img {
  width: 100%;
  position: relative;
}
.main-slide li .slide-title {
  position: absolute;
  left: 18.5%;
  top: 22%;
}
.main-slide li .slide-title > h4 {
  color: #dfef71;
  font-size: 24px;
  letter-spacing: 0.2px;
  line-height: 24px;
  text-align: left;
  text-transform: capitalize;
}
.main-slide li .slide-title > span > h1 {
  color: #ffffff;
  font-size: 50px;
  font-weight: 500;
  line-height: 45px;
  margin: 15px 0px 20px;
  text-align: left;
  text-transform: capitalize;
}
.main-slide li .slide-title .slide-shop-now > button {
  background-color: #d95e4e;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-family: inter;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 24px;
  padding: 7px 20px;
  text-align: center;
  text-transform: capitalize;
  border: none;
}
.list-sevice {
  margin-top: -10px;
  overflow: hidden;
}
.list-sevice .sevice1 {
  display: flex;
  background: url(../../assets/sevicebanner/sevice1.jpg) repeat scroll center
    center;
  border-radius: 5px;
  background-size: 100%;
  padding: 10px 0px 10px 25px;
  cursor: pointer;
  margin: 5px 3px 5px 0;
}
.list-sevice .sevice1 .sevice-icon {
  color: #fff;
  border-radius: 50px;
  line-height: 37px;
  text-align: center;
  border: 4px solid #9d9d9d;
  width: 45px;
  height: 45px;
  transition: all 0.5s ease-out;
}
.list-sevice .sevice1 .sevice-details {
  color: #f9f9f9;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 23px;
  text-align: left;
  text-transform: capitalize;
  margin-left: 15px;
}
.list-sevice .sevice2 {
  display: flex;
  background: url(../../assets/sevicebanner/sevice2.jpg) repeat scroll center
    center;
  background-size: 100%;
  padding: 10px 0px 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 3px 5px 3px;
}
.list-sevice .sevice2 .sevice-icon {
  color: #fff;
  border-radius: 50px;
  line-height: 37px;
  text-align: center;
  border: 4px solid #ed9ac0;
  width: 45px;
  height: 45px;
  transition: all 0.5s ease-out;
}
.list-sevice .sevice2 .sevice-details {
  color: #f9f9f9;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 23px;
  text-align: left;
  text-transform: capitalize;
  margin-left: 15px;
}
.list-sevice .sevice3 {
  display: flex;
  background: url(../../assets/sevicebanner/sevice3.jpg) repeat scroll center
    center;
  background-size: 100%;
  padding: 10px 0px 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 3px 5px 1px;
}
.list-sevice .sevice3 .sevice-icon {
  color: #fff;
  border-radius: 50px;
  line-height: 37px;
  text-align: center;
  border: 4px solid #dfa88c;
  width: 45px;
  height: 45px;
  transition: all 0.5s ease-out;
}
.list-sevice .sevice3 .sevice-details {
  color: #f9f9f9;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 23px;
  text-align: left;
  text-transform: capitalize;
  margin-left: 15px;
}
.list-sevice .sevice4 {
  display: flex;
  background: url(../../assets/sevicebanner/sevice4.jpg) repeat scroll center
    center;
  background-size: 100%;
  padding: 10px 0px 10px 25px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 0px 5px 3px;
}
.list-sevice .sevice4 .sevice-icon {
  color: #fff;
  border-radius: 50px;
  line-height: 37px;
  text-align: center;
  border: 4px solid #ecd983;
  width: 45px;
  height: 45px;
  transition: all 0.5s ease-out;
}
.list-sevice .sevice4 .sevice-details {
  color: #f9f9f9;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 23px;
  text-align: left;
  text-transform: capitalize;
  margin-left: 15px;
}
.sevice1:hover .sevice-icon {
  transform: rotate(360deg);
}
.sevice2:hover .sevice-icon {
  transform: rotate(360deg);
}
.sevice3:hover .sevice-icon {
  transform: rotate(360deg);
}
.sevice4:hover .sevice-icon {
  transform: rotate(360deg);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  opacity: 1;
  background-color: #fff;
  height: 15px;
  width: 15px;
  border-radius: 100%;
}
.carousel-dark .carousel-indicators .active {
  background-color: #e75c49;
}
.carousel-caption {
  top: 10%;
  left: 10%;
  text-align: left;
  display: grid !important;
  justify-content: left;
}
.carousel-caption span {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: #dfef71;
  text-transform: capitalize;
}
.carousel-caption h1 {
  font-size: 52px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 500;
  margin-top: 0;
  line-height: 40px;
  font-family: "Lora", serif;
}
.carousel-caption button {
  width: 120px;
  height: 45px;
  color: #fff;
  background-color: #e75c49;
  border: none;
  border-radius: 5px;
}
.carousel-caption button:hover {
  background-color: #d95e4e;
}
.carousel-control-prev {
  left: -5%;
  width: 5%;
  transition: all 0.5s ease;
}
.carousel-control-prev span {
  color: black;
  background-color: #fff;
  width: 30px;
  height: 30px;
  line-height: 32px;
  border-radius: 100%;
}
.list-slide:hover .carousel-control-prev {
  left: 0.5%;
  width: 5%;
  transition: all 0.5s ease;
  animation: prev 0.5s ease;
}
@keyframes prev {
  from {
    left: -5%;
  }
  to {
    left: 0.5%;
  }
}
.carousel-control-next {
  right: -5%;
  width: 5%;
  transition: all 0.5s ease;
}
.carousel-control-next span {
  color: black;
  background-color: #fff;
  width: 30px;
  height: 30px;
  line-height: 32px;
  border-radius: 100%;
}
.list-slide:hover .carousel-control-next {
  right: 0.5%;
  width: 5%;
  transition: all 0.5s ease;
  animation: next 0.5s ease;
}
@keyframes next {
  from {
    right: -5%;
  }
  to {
    right: 0.5%;
  }
}
@media (max-width: 1199px) {
  .main-slide li .slide-title {
    top: 8%;
    left: 11%;
  }
  .main-slide li .slide-title > span > h1 {
    margin: 10px 0 20px;
  }
  .list-sevice .sevice2 {
    margin: 5px 0px 5px 3px;
  }
  .list-sevice .sevice3 {
    margin: 5px 3px 5px 0px;
  }
}
@media (max-width: 991px) {
  .main-slide li .slide-title {
    top: 8%;
    left: 14%;
  }
  .main-slide li .slide-title > h4 {
    font-size: 20px;
  }
  .main-slide li .slide-title > span > h1 {
    font-size: 40px;
    line-height: 50px;
    margin: 0px 0 10px;
  }
  .main-slide {
    margin-top: 71px;
  }
  .carousel-caption {
    top: 5%;
    left: 8%;
    text-align: left;
    display: grid !important;
    justify-content: left;
  }
  .carousel-caption span {
    font-size: 20px;
  }
  .carousel-caption h1 {
    font-size: 45px;
  }
  .carousel-caption button {
    font-size: 14px;
    width: 100px;
    height: 40px;
  }
  .list-sevice .sevice1 {
    margin: 5px 0px 5px 0px;
  }
  .list-sevice .sevice2 {
    margin: 5px 0px 5px 0px;
  }
  .list-sevice .sevice3 {
    margin: 5px 0px 5px 0px;
  }
  .list-sevice .sevice4 {
    margin: 5px 0px 5px 0px;
  }
}
@media (max-width: 767px) {
  .main-slide li .slide-title {
    top: 5%;
    right: 20%;
  }
  .main-slide li .slide-title > h4 {
    font-size: 14px;
    line-height: 18px;
  }
  .main-slide li .slide-title > span > h1 {
    font-size: 24px;
    line-height: 28px;
    margin: 2px 0 8px;
  }
  .main-slide li .slide-title .slide-shop-now > button {
    font-size: 12px;
    line-height: 20px;
    padding: 4px 8px;
  }
  .carousel-caption {
    top: -3%;
    left: 10%;
    text-align: left;
    display: grid !important;
    justify-content: left;
  }
  .carousel-caption span {
    font-size: 16px;
  }
  .carousel-caption h1 {
    font-size: 30px;
    line-height: 20px;
  }
  .carousel-caption button {
    font-size: 10px;
    width: 70px;
    height: 30px;
    cursor: pointer;
  }
}
</style>
