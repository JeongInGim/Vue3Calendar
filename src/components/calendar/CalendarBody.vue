<template>
  <div class="calendar-body">
    <CalendarBodyWeek v-for="(week, index) in new Array(6)" :key="index" :props-data="createPropsData(index)" />
  </div>
</template>

<script setup>
import CalendarBodyWeek from "./calendar-body/CalendarBodyWeek.vue";
import {addDays, setDate} from "date-fns";

const now = new Date();

const createPropsData = (index) => {
  const standardDate = setDate(now, 1 + (index * 7))
  const day = standardDate.getDay();

  return {
    weekFirstDay: addDays(standardDate, -day),  // 주의 첫번째 일자
    weekLastDay: addDays(standardDate, 7 - day),  // 주의 마지막 일자
    standardMonth: now.getMonth() + 1,
  }
}

</script>

<style scoped>

</style>
