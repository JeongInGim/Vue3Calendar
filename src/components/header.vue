<template>
  <div class="header-title-area">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>

import {computed} from "vue";

const today = new Date()
const currentYear = today.getFullYear()
const currentMonth = today.getMonth()

const title = computed(() => `${currentYear}년 ${currentMonth + 1}월`)


</script>

<style lang="scss" scoped>
.header-title-area {
  display: flex;
  align-items: center;
  column-gap: 12px;
  height: 6rem;
}
</style>
