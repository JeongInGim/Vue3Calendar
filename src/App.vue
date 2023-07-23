<script setup>
import Header from './components/header.vue'
import Body from './components/body.vue'
</script>

<template>
  <div class="main-container">
    <Header />
    <Body />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
