<template>
  <div class="calendar">
    <div class="calendar-button-area">
      <button @click="decrease()"><i class="icon-left"></i></button>
      <button @click="increase()"><i class="icon-right"></i></button>
    </div>
    <CalendarHeader />
    <CalendarBody />
  </div>
</template>

<script lang="ts" setup>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarBody from "./calendar/CalendarBody.vue";
import {useCalendar} from "./calendar/store.js";

const {decrease, increase} = useCalendar();


</script>

<style lang="scss" scoped>



</style>
