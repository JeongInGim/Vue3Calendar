<template>
<!--  <table>
    <thead>
      <tr>
        <th v-for="day in DAYS">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="week in dates">
        <td v-for="date in week">{{ date }}</td>
      </tr>
    </tbody>
  </table>-->

  <div class="calendar">
    <div class="calendar-header">
      <div class="calendar-header-context" v-for="day in DAYS">
        {{ day }}
      </div>
    </div>

    <div class="calendar-body">
      <div class="calendar-body-week" v-for="week in dates">
        <div class="calendar-body-week-context" v-for="date in week">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const DAYS = [ '일', '월', '화', '수', '목', '금', '토' ];
const dates = ref([]);

onMounted(setDatesOfThisMonth)

function setDatesOfThisMonth() {
  const firstWeek = getFirstWeek();
  let datesOfWeek = []
  let count = 1

  dates.value.push(firstWeek)

  const lastDateOfThisMonth = getLast().getDate()
  for (let i = firstWeek[6] + 1; i <= lastDateOfThisMonth; i++) {
    datesOfWeek.push(i)
    if (count % 7 === 0) {
      dates.value.push(datesOfWeek)
      datesOfWeek = []
    }
    if (i === lastDateOfThisMonth) {
      dates.value.push(datesOfWeek)
    }
    count++
  }
  if (getLast().getDay() !== 6) {
    setLastWeek()
  }
}

function getFirstWeek() {
  const firstWeek = [];

  const length = DAYS.length
  for (let j = 0; j < getFirst().day; j++) {
    firstWeek.push('');
  }
  for (let i = 0; i < length - getFirst().day; i++) {
    firstWeek.push(i + 1);
  }

  return firstWeek;
}


function setLastWeek() {
  // 마지막 날이 6요일이면
  // 스킵
  // 마지막 날이 0요일이면
  // 필요한 빈칸: 6개
  // 마지막 날이 1요일이면
  // 필요한 빈칸: 5개
  for (let i = 0; i < 6 - getLast().getDay(); i++) {
    const lastWeek = dates.value[dates.value.length - 1]
    lastWeek.push('')
  }
}

const getToday = () => {
  const today = new Date()

  return {
    year: today.getFullYear(),
    month: today.getMonth(),
  }
}

const getFirst = () => {
  const today = getToday();
  const first = new Date(today.year, today.month, '01');

  return {
    day: first.getDay(),
  }
}
/**
 * 마지막날 가져오기
 */
const getLast = () => new Date(getToday().year, getToday().month + 1, 0);

</script>

<style lang="scss">
//table {
//    display: inline;
//    font-size: 30px;
//}
//th, td {
//    padding: 10px 30px;
//    text-align: center;
//    border: 1px solid black;
//    font-size: 20px;
//}
//th:nth-child(1), td:nth-child(1) {
//    color: red;
//}
//th:nth-child(7), td:nth-child(7) {
//    color: blue;
//}


/********************************/

.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;

  &-header-context, &-body-week-context {
    width: 84px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid black;
    font-size: 20px;
  }

  &-header {
    display: flex;
    column-gap: 2px;

    &-context:nth-of-type(1) {
      color: red;
    }

    &-context:nth-of-type(7) {
      color: blue;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    row-gap: 2px;

    &-week {
      display: flex;
      column-gap: 2px;

      &-context:nth-of-type(1) {
        color: red;
      }

      &-context:nth-of-type(7) {
        color: blue;
      }
    }
  }
}


</style>
