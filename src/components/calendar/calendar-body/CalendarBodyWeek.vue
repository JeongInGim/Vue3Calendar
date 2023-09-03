<template>
  <div class="calendar-body-week">
    <CalendarBodyContext v-for="(date, i) in dateList" :key="i"  :d="date" />
  </div>
</template>

<script setup>
import {addDays} from "date-fns";
import {ref, watchEffect} from "vue";
import CalendarBodyContext from "./CalendarBodyContext.vue";

const props = defineProps({
  propsData: {
    weekFirstDay: null,
    weekLastDay: null,
    standardMonth: 0,
  }
})

const dateList = ref([]);

const createData = (date, standardMonth) => {
  const month = date.getMonth() + 1;

  return standardMonth === month ? {
    year: date.getFullYear(),
    month: month,
    date: date.getDate(),
  } : {};
}

const initDateList = () => {
  dateList.value = [];
}

watchEffect(() => {
  const { propsData } = props;

  const { weekFirstDay, weekLastDay, standardMonth } = propsData;

  initDateList();

  let date = addDays(weekFirstDay, 0);

  while(date < weekLastDay) {
    dateList.value.push(createData(date, standardMonth));

    date = addDays(date, 1);
  }
})

</script>

<style scoped>

</style>
