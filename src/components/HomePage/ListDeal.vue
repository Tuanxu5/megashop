<script lang="ts" setup></script>
<template>
  <div class="main-deal mt-5">
    <div class="container flex-style">
      <div class="title-deal d-flex">
        <span>Deal Of The Week</span>
        <div class="tab-left-right">
          <span><i class="fas fa-angle-left"></i></span>
          <span><i class="fas fa-angle-right"></i></span>
        </div>
      </div>
      <div class="list-deal">
        <div class="single-deal d-flex">
          <div class="deal-image">
            <img
              class="image-1"
              src="../../assets/HomeProduct/pr3.jpg"
              alt=""
            />
            <img
              class="image-2"
              src="../../assets/HomeProduct/pr4.jpg"
              alt=""
            />
          </div>
          <div class="deal-about">
            <div class="deal-name">
              <span>Goodbye Tellus Goodbye risus...</span>
            </div>
            <div class="deal-vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="deal-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
            <deal class="deal-time d-flex jus-left">
              <div class="circle">
                <span>118</span>
                <span>Days</span>
              </div>
              <div class="circle">
                <span>0</span>
                <span>Hrs</span>
              </div>
              <div class="circle">
                <span>40</span>
                <span>Mins</span>
              </div>
            </deal>
          </div>
        </div>
        <div class="single-deal d-flex">
          <div class="deal-image">
            <img
              class="image-1"
              src="../../assets/HomeProduct/pr3.jpg"
              alt=""
            />
            <img
              class="image-2"
              src="../../assets/HomeProduct/pr4.jpg"
              alt=""
            />
          </div>
          <div class="deal-about">
            <div class="deal-name">
              <span>Goodbye Tellus Goodbye risus...</span>
            </div>
            <div class="deal-vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="deal-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
            <deal class="deal-time d-flex jus-left">
              <div class="circle">
                <span>118</span>
                <span>Days</span>
              </div>
              <div class="circle">
                <span>0</span>
                <span>Hrs</span>
              </div>
              <div class="circle">
                <span>40</span>
                <span>Mins</span>
              </div>
            </deal>
          </div>
        </div>
        <div class="single-deal d-flex">
          <div class="deal-image">
            <img
              class="image-1"
              src="../../assets/HomeProduct/pr3.jpg"
              alt=""
            />
            <img
              class="image-2"
              src="../../assets/HomeProduct/pr4.jpg"
              alt=""
            />
          </div>
          <div class="deal-about">
            <div class="deal-name">
              <span>Goodbye Tellus Goodbye risus...</span>
            </div>
            <div class="deal-vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="deal-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
            <deal class="deal-time d-flex jus-left">
              <div class="circle">
                <span>118</span>
                <span>Days</span>
              </div>
              <div class="circle">
                <span>0</span>
                <span>Hrs</span>
              </div>
              <div class="circle">
                <span>40</span>
                <span>Mins</span>
              </div>
            </deal>
          </div>
        </div>
        <div class="single-deal d-flex">
          <div class="deal-image">
            <img
              class="image-1"
              src="../../assets/HomeProduct/pr3.jpg"
              alt=""
            />
            <img
              class="image-2"
              src="../../assets/HomeProduct/pr4.jpg"
              alt=""
            />
          </div>
          <div class="deal-about">
            <div class="deal-name">
              <span>Goodbye Tellus Goodbye risus...</span>
            </div>
            <div class="deal-vote">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="deal-price">
              <span>$135.00</span>
              <del>$150.00</del>
            </div>
            <deal class="deal-time d-flex jus-left">
              <div class="circle">
                <span>118</span>
                <span>Days</span>
              </div>
              <div class="circle">
                <span>0</span>
                <span>Hrs</span>
              </div>
              <div class="circle">
                <span>40</span>
                <span>Mins</span>
              </div>
            </deal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-deal {
  background: #f6f6f6;
  height: auto;
  display: flex;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  padding: 20.5px;
  grid-gap: 20.5px;
}

.list-deal .single-deal {
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 16px;
}
.title-deal {
  justify-content: space-between;
  margin-bottom: 20px;
}
.title-deal > span {
  color: #e76453;
  font-size: 20px;
  padding-bottom: 10px;
}
.deal-image {
  position: relative;
  text-align: center;
}
.deal-image img {
  width: 159px;
  transition: all 0.5s ease;
}
.deal-about {
  width: 151px;
}
.deal-about .deal-name {
  cursor: pointer;
  text-align: left;
  font-size: 14px;
}
.deal-about .deal-vote {
  color: #fabf00;
  font-size: 10px;
  margin: 8px 0;
}
.deal-about .deal-price {
  margin: 8px 0;
}
.deal-about .deal-price span {
  padding-right: 7px;
  font-size: 15px;
  color: #e76453;
}
.deal-about .deal-price del {
  font-size: 15px;
  color: #868686;
}

.deal-time .circle {
  display: grid;
  text-align: center;
  border: 1px solid #e0e0e0;
  font-size: 11px;
  padding: 4px;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.jus-left {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.deal-time .circle span:nth-child(2) {
  color: rgb(135, 135, 135);
  font-size: 10px;
}
.image-2 {
  top: 0;
  left: 0;
  z-index: 900;
  position: absolute;
  transition: all 0.5s ease;
  transform: scaleX(0);
}
.list-deal .single-deal:hover .image-1 {
  transition: all 0.5s ease;
  transform: scaleX(0);
}
.list-deal .single-deal:hover .image-2 {
  transition: all 0.5s ease;
  transform: scaleX(1);
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
@media (max-width: 1199px) {
  .list-deal {
    padding: 21.3px;
    grid-gap: 21.3px;
  }
  .deal-image img {
    width: 203px;
    transition: all 0.5s ease;
  }
  .deal-about {
    width: 198px;
    transition: all 0.5s ease;
  }
}
@media (max-width: 991px) {
  .list-deal {
    padding: 22.5px;
    grid-gap: 22.5px;
  }
  .deal-about {
    width: 280px;
    text-align: center;
  }

  .list-deal .single-deal {
    text-align: center;
    display: grid !important;
    justify-content: center;
  }
  .image-2 {
    left: 38px;
  }
  .jus-left {
    justify-content: center;
  }
  .deal-about .deal-name {
    display: block;
    text-align: center;
  }
}
@media (max-width: 767px) {
  .list-deal {
    padding: 21.2px;
    grid-gap: 21.2px;
  }
  .single-deal {
    text-align: center;
    display: grid !important;
    justify-content: center;
  }
  .jus-left {
    justify-content: center;
  }
  .list-deal .single-deal {
    padding: 10px;
  }
  .image-2 {
    left: 0px;
  }
  .deal-name > span {
    display: block;
    text-align: center;
  }
  .title-deal {
    display: grid !important;
    justify-content: center;
  }
  .title-blog > span {
    margin-bottom: 10px;
  }
  .tab-left-right {
    text-align: center;
  }
  .deal-about {
    width: 201px;
    text-align: center;
  }
}
</style>
