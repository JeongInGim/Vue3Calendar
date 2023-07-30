<template>
  <div class="calendar-body">
    <CalendarBodyWeek v-for="(week, index) in new Array(6)" :props-data="createPropsData(index)" />
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import CalendarBodyWeek from "./calendar-body/CalendarBodyWeek.vue";


const createPropsData = (index) => {
  const date = new Date();
  date.setDate(1 + (7 * index))


  return {
    weekCount: index,
    sunDay: date.,  // 주의 일요일


    standardDate: date
  }
}










// const DAYS_LENGTH = 7;
// const dates = ref([]);
//
// onMounted(setDatesOfThisMonth)
//
// /**
//  * 첫번째로 동작하는 함수
//  *
//  * dates를 만들어내는 함수
//  */
// function setDatesOfThisMonth() {
//   const firstWeek = getFirstWeek();
//   let datesOfWeek = []
//   let count = 1
//
//   dates.value.push(firstWeek)
//
//   const lastDateOfThisMonth = getLast().getDate()
//   for (let i = firstWeek[6] + 1; i <= lastDateOfThisMonth; i++) {
//     datesOfWeek.push(i)
//     if (count % 7 === 0) {
//       dates.value.push(datesOfWeek)
//       datesOfWeek = []
//     }
//     if (i === lastDateOfThisMonth) {
//       dates.value.push(datesOfWeek)
//     }
//     count++
//   }
//   if (getLast().getDay() !== 6) {
//     setLastWeek()
//   }
// }
//
// function getFirstWeek() {
//   const firstWeek = [];
//
//   const length = DAYS_LENGTH
//   for (let j = 0; j < getFirst().day; j++) {
//     firstWeek.push('');
//   }
//   for (let i = 0; i < length - getFirst().day; i++) {
//     firstWeek.push(i + 1);
//   }
//
//   return firstWeek;
// }
//
//
// function setLastWeek() {
//   // 마지막 날이 6요일이면
//   // 스킵
//   // 마지막 날이 0요일이면
//   // 필요한 빈칸: 6개
//   // 마지막 날이 1요일이면
//   // 필요한 빈칸: 5개
//   for (let i = 0; i < 6 - getLast().getDay(); i++) {
//     const lastWeek = dates.value[dates.value.length - 1]
//     lastWeek.push('')
//   }
// }
//
// const getToday = () => {
//   const today = new Date()
//
//   return {
//     year: today.getFullYear(),
//     month: today.getMonth(),
//   }
// }
//
// const getFirst = () => {
//   const today = getToday();
//   const first = new Date(today.year, today.month, '01');
//
//   return {
//     day: first.getDay(),
//   }
// }
// /**
//  * 마지막날 가져오기
//  */
// const getLast = () => new Date(getToday().year, getToday().month + 1, 0);

</script>

<style scoped>

</style>
