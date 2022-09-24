<script setup lang="ts">
import HeaderPage from "./components/Model/HeaderPage/HeaderPage.vue";
import HomePage from "./components/HomePage.vue";
import FooterPage from "./components/Model/FooterPage/FooterPage.vue";
</script>
<template>
  <!--start main area-->
  <main id="page">
    <!--start headerpage area-->
    <HeaderPage></HeaderPage>
    <router-view />
    <FooterPage></FooterPage>
    <!--end headerpage area-->
  </main>
  <!--end main area-->
</template>

<style scoped></style>
