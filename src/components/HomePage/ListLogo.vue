<template>
  <div class="main-logo mt-5">
    <div class="container flex-style">
      <div class="list-logo">
        <div class="list-full">
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo1.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo2.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo3.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo4.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo5.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo1.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
          <div class="single-logo">
            <div class="logo-image">
              <img
                src="../../assets/logo/logo3.jpg"
                alt="Fashion Manufacturer1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.list-logo {
  overflow: hidden;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #e0e0e0;
}

.list-full {
  width: 1530px;
  height: auto;
  display: grid;
  grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  animation: slide 8s ease 1s infinite;
}

@keyframes slide {
  20% {
    margin-left: 0px;
  }

  46.6% {
    margin-left: -207px;
  }

  73.2% {
    margin-left: -440px;
  }

  100% {
    margin-left: 0px;
  }
}
.list-logo .list-full .single-logo {
  padding: 5px;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  height: auto;
}
.list-logo .list-full .single-logo img {
  filter: grayscale(100%) brightness(300%) contrast(0);
}
.list-logo .list-full .single-logo:hover img {
  filter: none;
}
@media (max-width: 1199px) {
  .list-full {
    width: 1590px;
    height: auto;
    display: grid;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
    animation: slidelg 20s ease infinite;
  }
  @keyframes slidelg {
    20% {
      margin-left: 0px;
    }
    30% {
      margin-left: -220px;
    }
    60% {
      margin-left: -440px;
    }
    80% {
      margin-left: -680px;
    }
    100% {
      margin-left: 0px;
    }
  }
}
@media (max-width: 767px) {
  .list-full {
    width: 1100px;
    height: auto;
    display: grid;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
    animation: slidesm 20s ease 1s infinite;
  }
  @keyframes slidesm {
    20% {
      margin-left: 0px;
    }
    36% {
      margin-left: -155px;
    }
    52% {
      margin-left: -310px;
    }
    68% {
      margin-left: -470px;
    }
    84% {
      margin-left: -630px;
    }
    100% {
      margin-left: 0px;
    }
  }
}
</style>
