<template>
  <h1>{{ title }}</h1>
</template>

<script setup>

import {onMounted, reactive, ref} from "vue";

const title = ref(''); // 반응형 변수

const getHeader = () => {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const todaysDate = today.getDate()

  title.value = `오늘은 ${currentYear}년 ${currentMonth + 1}월 ${todaysDate}일입니다.`;
}

onMounted(getHeader);

</script>

<style scoped>
</style>
