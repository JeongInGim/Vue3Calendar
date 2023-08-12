<template>
  <div class="calendar">
    <CalendarHeader />
    <CalendarBody />
  </div>
</template>

<script setup>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarBody from "./calendar/CalendarBody.vue";



</script>

<style>
table {
    display: inline;
    font-size: 30px;
}
th, td {
    padding: 10px 30px;
    text-align: center;
    border: 1px solid black;
    font-size: 20px;
}
th:nth-child(1), td:nth-child(1) {
    color: red;
}
th:nth-child(7), td:nth-child(7) {
    color: blue;
}
</style>
