<script lang="ts" setup></script>
<template>
  <div class="footer-top">
    <div class="container d-flex flex-style">
      <div class="footer-top-main col-sm-12 d-flex">
        <div class="footer-title-block">
          <img
            src="https://prestashop.templatemela.com/PRS08/PRS080199/PRS3/themes/PRS080199_03/assets/img/megnor/email.svg"
            alt=""
          />
          <span class="bd-r">Get Latest Update & News</span>
        </div>
        <div class="footer-title">
          <span class="bd-l"
            >Get All The Latest Information On Events & Offers
          </span>
        </div>
        <form action="#">
          <div class="footer-form-search d-flex">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flex-style {
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-top {
  margin-top: 60px;
}

.footer-top-main {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: -webkit-linear-gradient(top, #f4f4f4 0%, #dbdbda 100%);
  padding: 9px 0px 9px 8px;
  color: #333;
  width: 100%;
}

.footer-title-block img {
  width: 65px;
  height: 45px;
}

.footer-title-block span {
  padding: 0 10px 0 0;
  font-size: 17px;
  font-weight: 500;
}

.bd-r {
  border-right: 1px solid #fff;
}

.footer-title span {
  line-height: 43px;
  padding: 0 10px;
  font-size: 14px;
}

.bd-l {
  border-left: 1px solid #cdcdcd;
}

.footer-form-search input {
  width: 315px;
  font-size: 14px;
  border: none;
  padding: 0 20px;
  margin-left: 15px;
  border-radius: 5px;
}

.footer-form-search button {
  font-size: 14px;
  margin-left: 10px;
  border: none;
  background-color: #e76453;
  padding: 0 12px;
  color: #fff;
  border-radius: 5px;
  height: 43px;
}

input:focus {
  outline: 0;
}

@media screen and (device-width: 320px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {
  .footer-form-search {
    margin: 10px 0 10px 0;
    justify-content: center;
  }
}

@media (max-width: 1200px) {
  .footer-top-main {
    text-align: center;
    display: grid !important;
  }

  .footer-form-search {
    margin: 10px 0 10px 0;
    justify-content: center;
  }

  .bd-r {
    border: none;
  }

  .bd-l {
    border: none;
  }
}
</style>
