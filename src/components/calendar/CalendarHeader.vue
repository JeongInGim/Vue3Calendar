<template>
  <!-- 달력의 요일 보여주는 곳 -->
  <div class="calendar-header">
    <div class="calendar-header-context" v-for="day in DAYS">
      {{ day }}
    </div>
  </div>
</template>

<script setup>

const DAYS = [ '일', '월', '화', '수', '목', '금', '토' ];

</script>

<style scoped>

</style>
