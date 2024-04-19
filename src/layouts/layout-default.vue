<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>
