<script lang="ts" setup></script>
<template>
  <div class="main-blog mt-5">
    <div class="container flex-style">
      <div class="title-blog d-flex">
        <span>From The Blog</span>
        <div class="tab-left-right">
          <span><i class="fas fa-angle-left"></i></span>
          <span><i class="fas fa-angle-right"></i></span>
        </div>
      </div>
      <div class="list-blog">
        <div class="single-blog">
          <div class="blog-image">
            <img src="../../assets/blog/blog1.jpg" alt="" />
            <div class="blog-zoomlink">
              <span><i class="fas fa-search"></i></span>
              <span><i class="fas fa-link"></i></span>
            </div>
          </div>
          <div class="blog-about">
            <div class="blog-datetime">
              <span>20 September, 2021 </span>
            </div>
            <div class="blog-name">
              <span>At risus pretium urna</span>
            </div>
            <div class="blog-info">
              Odio ut pretium ligula quam Vestibulum consequat convallis
              fringilla Vestibulum nulla....
            </div>
          </div>
        </div>
        <div class="single-blog">
          <div class="blog-image">
            <img src="../../assets/blog/blog2.jpg" alt="" />
            <div class="blog-zoomlink">
              <span><i class="fas fa-search"></i></span>
              <span><i class="fas fa-link"></i></span>
            </div>
          </div>
          <div class="blog-about">
            <div class="blog-datetime">
              <span>20 September, 2021 </span>
            </div>
            <div class="blog-name">
              <span>At risus pretium urna</span>
            </div>
            <div class="blog-info">
              Odio ut pretium ligula quam Vestibulum consequat convallis
              fringilla Vestibulum nulla....
            </div>
          </div>
        </div>
        <div class="single-blog">
          <div class="blog-image">
            <img src="../../assets/blog/blog3.jpg" alt="" />
            <div class="blog-zoomlink">
              <span><i class="fas fa-search"></i></span>
              <span><i class="fas fa-link"></i></span>
            </div>
          </div>
          <div class="blog-about">
            <div class="blog-datetime">
              <span>20 September, 2021 </span>
            </div>
            <div class="blog-name">
              <span>At risus pretium urna</span>
            </div>
            <div class="blog-info">
              Odio ut pretium ligula quam Vestibulum consequat convallis
              fringilla Vestibulum nulla....
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-blog {
  overflow: hidden;
  height: auto;
  display: flex;
  grid-gap: 20px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  background-color: #f6f6f6;
}

.list-blog .single-blog {
  transition: all 0.5s ease;
  position: relative;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  height: auto;
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

.title-blog {
  justify-content: space-between;
  margin-bottom: 20px;
}

.title-blog > span {
  font-size: 20px;
  color: #e76453;
}

.blog-image {
  transition: all 0.5s ease;
  overflow: hidden;
}

.blog-image img {
  overflow: hidden;
  transition: all 0.5s ease;
  width: 100%;
  border-radius: 5px 5px 0 0;
  position: relative;
}

.blog-about {
  padding: 10px;
  text-align: left;
}

.blog-about .blog-datetime {
  font-size: 14px;
  color: #e76453;
}

.blog-about .blog-name {
  margin: 5px 0;
  font-size: 14px;
}

.blog-about .blog-name > span:hover {
  color: #e76453;
}

.blog-about .blog-info {
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-zoomlink {
  position: absolute;
  z-index: 1000;
  top: 30%;
  text-align: center;
  width: 100%;
  color: #fff;
  display: none;
}

.blog-zoomlink > span {
  margin: 5px;
  width: 30px;
  padding: 8px 12px;
  border-radius: 50px;
  background-color: #e76453;
}

.blog-zoomlink > span:hover {
  background-color: #d95e4e;
}

.list-blog .single-blog:hover .blog-zoomlink {
  display: block;
}

.list-blog .single-blog:hover img {
  filter: brightness(50%);
  transition: all 0.5s ease;
  transform: scale(1.1);
}

@media (max-width: 991px) {
  .list-blog {
    grid-gap: 20px;
    padding: 20px;
  }

  .blog-image {
    transition: all 0.5s ease;
    overflow: hidden;
    width: 315px;
  }

  .blog-image img {
    width: 315px;
  }
}

@media (max-width: 767px) {
  .list-blog {
    grid-gap: 24px;
    padding: 24px;
  }

  .blog-image {
    width: 464px;
  }

  .blog-image img {
    width: 100%;
  }

  .blog-about {
    height: 120px;
  }

  .title-blog {
    display: grid !important;
    justify-content: center;
  }

  .title-blog > span {
    margin-bottom: 10px;
  }

  .tab-left-right {
    text-align: center;
  }
}
</style>
