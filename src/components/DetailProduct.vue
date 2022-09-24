<script lang="ts">
import MainLeft from "./Model/Main/MainLeft.vue";
import MainDetailProduct from "./DetailProductPage/MainDetailProduct.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MainLeft,
    MainDetailProduct,
  },
});
</script>
<template>
  <div class="detail-product">
    <div class="container">
      <div class="content mt-5">
        <MainLeft></MainLeft>
        <MainDetailProduct></MainDetailProduct>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: grid;
  grid-template-columns: 20.7% 76.5%;
  grid-gap: 2.8%;
}

@media (max-width: 991px) {
  .content {
    grid-template-columns: 100% 0%;
  }

  .content-left {
    display: none;
  }

  #accordion {
    display: block;
  }
}
</style>
