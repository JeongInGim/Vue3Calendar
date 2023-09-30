<template>
  <div class="calendar">
    <div class="button-area">
      <button class="button" @click="setPrevMonth()">{{ prevMonth }}월</button>
      <button class="button" @click="setNextMonth()">{{ nextMonth }}월</button>
    </div>
    
    <CalendarHeader />
    <CalendarBody :thisYm="thisYm"/>
  </div>
</template>

<script setup>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarBody from "./calendar/CalendarBody.vue";
import { useHolidayStore } from './calendar/store/holidayStore.js'
import { useThisYmStore } from '../store/store.js'
import { storeToRefs } from 'pinia'
import { ref } from "vue";

const holidayStore = useHolidayStore()
const thisYmStore = useThisYmStore()

// state는 반응형으로
const { thisYm } = storeToRefs(thisYmStore)
const { monthHoliday } = storeToRefs(holidayStore)
const prevMonth = ref(0)
const nextMonth = ref(0)

setHolidayList()
setMonthInBtn()

async function setHolidayList() {
  const year = toStringYear(thisYm.value.year)
  const month = toStringMonth(thisYm.value.month + 1)
  await holidayStore.setHoliday(year, month)
}
function toStringYear(year) {
  return year.toString()
}
function toStringMonth(month) {
  return month < 10 ? '0' + month.toString() : month.toString()
}
function setMonthInBtn() {
  console.log('setMonthInBtn')
  const currentMonth = thisYm.value.month
  console.log(currentMonth)
  if (currentMonth === 11) {
    nextMonth.value = 1
    prevMonth.value = 11
  } else if (currentMonth === 0) {
    nextMonth.value = 2
    prevMonth.value = 12
  } else {
    prevMonth.value = currentMonth
    nextMonth.value = currentMonth + 2
  }
  console.log('prev: ',prevMonth , 'next: ', nextMonth)
}

// action은 그대로
// 이거 안 됨
// const { prevMonth, nextMonth } = store

function setPrevMonth() {
  thisYmStore.prevMonth() // @click에 직접 갖다붙여도 됨
  setHolidayList()
  setMonthInBtn()
}

function setNextMonth() {
  thisYmStore.nextMonth()
  setHolidayList()
  setMonthInBtn()
}

// onMounted(setMonthInBtn())

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
