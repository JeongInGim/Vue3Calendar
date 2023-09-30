<template>
  <div class="calendar-body-week">
    <CalendarBodyContext v-for="(date, i) in dateList" :key="i"  :d="date" />
  </div>
</template>

<script setup>
import {addDays} from "date-fns";
import {onMounted, ref, watchEffect} from "vue";
import CalendarBodyContext from "./CalendarBodyContext.vue";
import { useHolidayStore } from '../../calendar/store/holidayStore.js'
import { useThisYmStore } from "../../../store/store";
import { storeToRefs } from 'pinia'

const holidayStore = useHolidayStore()
const thisYmStore = useThisYmStore()
const { thisYm } = storeToRefs(thisYmStore)
const { monthHoliday } = storeToRefs(holidayStore)

const props = defineProps({
  propsData: {
    weekFirstDay: null,
    weekLastDay: null,
    standardMonth: 0,
  }
})

const dateList = ref([]);

// async function setHolidayList() {
//   const year = toStringYear(thisYm.value.year)
//   const month = toStringMonth(thisYm.value.month + 1)
//   await holidayStore.setHoliday(year, month)
// }

function toStringYear(year) {
  return year.toString()
}

function toStringMonth(month) {
  return month < 10 ? '0' + month.toString() : month.toString()
}

function toStringDate(date) {
  return date < 10 ? '0' + date.toString() : date.toString()
}

// createData()의 반환치의 isHoliday에 들어갈 값을 정하기
function getIsHoliday(date) {
  const dateToString = 
    toStringYear(thisYm.value.year) 
    + toStringMonth(date.getMonth() + 1) 
    + toStringDate(date.getDate())
  const isHoliday = holidayStore.isHoliday(dateToString)
  // let isHoliday = false
  // let isHolidayList = []
  // const holidayList = holidayStore.getHoliday()
  // for (let i=0; i<holidayList.length; i++) {
  //   // isHolidayList = []
  //   if (holidayList[i].locdate.toString() === dateToString) {
  //     console.log(date.getDate() + '일은 ' + i + '번째 locdate에서 휴일임이 판단되었습니다.')
  //     isHolidayList.push(holidayList[i].locdate)
  //     console.log('isHolidayList에 ' + isHolidayList[0] + '이 저장되었습니다.')
  //   }
  // }
  // return isHoliday = (isHolidayList.length > 0)
  return isHoliday
}

const createData = (date, standardMonth) => {
  const month = date.getMonth() + 1;

  return standardMonth === month ? {
    year: thisYm.value.year,
    month: month,
    date: date.getDate(),
    isHoliday: getIsHoliday(date)
  } : {};
}

// 화살표 함수는 위쪽에
// 라이프사이클 훅은 되도록 아래에 두기(렌더링 꼬임)
// watcher: 특정 값이 바뀌는 것을 탐지하고 그 후에 이 동작을 하세요(mounted 뒤에 일어나는 일)
// 이 어플리케이션에서는 onMounted의 역할을 대부분 포함함
watchEffect(() => {
  const {weekFirstDay, weekLastDay, standardMonth} = props.propsData
  foo(weekFirstDay, weekLastDay, standardMonth)
})


// onMounted: 렌더링 후 브라우저에 컴포넌트가 부착된 후에 이 동작을 하세요
// onMounted(foo)



async function foo(weekFirstDay, weekLastDay, standardMonth) {
  // await setHolidayList()
  dateList.value = []
  // const { weekFirstDay, weekLastDay, standardMonth } = props.propsData;
  let date = addDays(weekFirstDay, 0);

  while(date < weekLastDay) {
    dateList.value.push(createData(date, standardMonth));

    date = addDays(date, 1);
  }
}



</script>

<style scoped>

</style>
