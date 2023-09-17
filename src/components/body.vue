<template>
  <div class="calendar">
    <div class="button-area">
      <button class="button" @click="setPrevMonth()">{{ thisYm.month }}월</button>
      <button class="button" @click="setNextMonth()">{{ thisYm.month + 2 }}월</button>
    </div>
    
    <CalendarHeader />
    <CalendarBody :thisYm="thisYm"/>
  </div>
</template>

<script setup>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarBody from "./calendar/CalendarBody.vue";
import { useThisYmStore } from '../store/store.js'

import { storeToRefs } from 'pinia'


const store = useThisYmStore()


// state는 반응형으로
const { thisYm } = storeToRefs(store)
// const { monthHoliday } = storeToRefs(holidayStore)



// action은 그대로
// 이거 안 됨
// const { prevMonth, nextMonth } = store

function setPrevMonth() {
  store.prevMonth() // @click에 직접 갖다붙여도 됨
}

function setNextMonth() {
  store.nextMonth()
}

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
