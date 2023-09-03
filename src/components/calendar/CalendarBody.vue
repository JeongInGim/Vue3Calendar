<template>
  <div class="calendar-body">
    <CalendarBodyWeek v-for="(week, index) in calendar.list" :key="index" :props-data="week" />
  </div>

  {{ calendar.formatDate }}
</template>

<script setup>
import CalendarBodyWeek from "./calendar-body/CalendarBodyWeek.vue";
import {useCalendar} from "./store.js";

const calendar = useCalendar();

</script>

<style scoped>

</style>
