<template>
  <div class="Main-categories mt-5">
    <div class="container flex-style">
      <div class="title-cate d-flex">
        <span>Shop By Category</span>
        <div class="tab-left-right">
          <span><i class="fas fa-angle-left"></i></span>
          <span><i class="fas fa-angle-right"></i></span>
        </div>
      </div>
      <div class="list-categories">
        <div class="single-categories d-flex" v-for="cate in 3">
          <div class="cate-image">
            <img src="../../assets/categories/pr1.jpg" alt="" />
          </div>
          <div class="cate-info">
            <div class="name-cate">
              <span>Smart Phone</span>
            </div>
            <div class="about-cate d-grid">
              <span>Nokia Phone</span>
              <span>Xiaomi Phone</span>
              <span>Lenovo Phone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.list-categories {
  overflow: hidden;
  height: auto;
  display: flex;
  grid-gap: 23px;
  border-radius: 5px;
}
.list-categories .single-categories {
  width: 358px;
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: #f0f0f1;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  height: 202px;
  padding: 28px 10px 28px 28px;
}
.list-categories .single-categories:hover img {
  transition: all 0.5s ease-in-out;
  transform: scale(1.15);
}
.title-cate {
  justify-content: space-between;
  margin-bottom: 20px;
}
.title-cate > span {
  font-size: 20px;
  color: #e76453;
}
.cate-image {
  background-color: #fff;
  height: 140px;
  width: 140px;
  border-radius: 100px;
}
.cate-image img {
  margin-top: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background-color: #fff;
  height: 120px;
  width: 120px;
  border-radius: 100px;
}
.cate-info {
  font-size: 15px;
  margin-left: 35px;
  text-align: left;
}
.name-cate {
  font-weight: 500;
  margin: 15px 0 5px 0;
}
.name-cate span {
  font-size: 14px;
}
.name-cate:hover {
  color: #e76453;
}
.about-cate {
  line-height: 20px;
  font-size: 12px;
  color: #777;
}
.about-cate span {
  margin: 3px 0;
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
  .list-categories .single-categories {
    width: 300px;
  }
  .cate-info {
    margin-left: 15px;
  }
}
@media (max-width: 991px) {
  .list-categories .single-categories {
    width: 336.5px;
  }
  .cate-image {
    width: 188px;
  }
  .cate-info {
    width: 200px;
  }
}
@media (max-width: 767px) {
  .list-categories {
    grid-gap: 30px;
  }
  .list-categories .single-categories {
    width: 512px;
  }
  .cate-image {
    width: 137px;
  }
  .cate-info {
    width: 320px;
  }
}
</style>
