<script setup>
import HelloWorld from './components/header.vue'
import Body from './components/body.vue'
</script>

<template>
  <div>
    
  </div>
  <HelloWorld msg="hello world" />
  <Body></Body>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
