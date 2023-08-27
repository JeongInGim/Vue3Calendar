<template>
  <div class="calendar">
    <div class="button-area">
      <button class="button" @click="setPrevMonth()">지난달</button>
      <button class="button" @click="setNextMonth()">다음달</button>
    </div>
    
    <CalendarHeader />
    <CalendarBody :calendarMonth="calendarMonth"/>
  </div>
</template>

<script setup>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarBody from "./calendar/CalendarBody.vue";
import { ref } from "vue";
import { useCalendarMonthStore } from '../store/store.js'
import { storeToRefs } from 'pinia'

const store = useCalendarMonthStore()

// state는 반응형으로
const { calendarMonth } = storeToRefs(store)

// action은 그대로
// 이거 안 됨
// const { prevMonth, nextMonth } = store

function setPrevMonth() {
  store.prevMonth() // @click에 직접 갖다붙여도 됨
  console.log('current month: ', calendarMonth.value)
}

function setNextMonth() {
  store.nextMonth()
  console.log('current month: ', calendarMonth.value)
}

// const now = new Date()
// const calendarMonth = ref(now.getMonth())

// console.log("in body, calendarMonth: ", calendarMonth)

// function prevMonth() {
//   calendarMonth.value--
//   console.log(calendarMonth.value)
// }

// function nextMonth() {
//   calendarMonth.value++
//   console.log(calendarMonth.value)
// }
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
.button-area{
  display: flex;
  flex-direction: row;
}
.button {
  margin: 10px 20px;

}
</style>
