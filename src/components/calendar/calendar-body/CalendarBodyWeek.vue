<template>
  <div class="calendar-body-week">
    <CalendarBodyContext v-for="(date, i) in dateList" :key="i"  :d="date" />
  </div>
</template>

<script setup>
import {addDays} from "date-fns";
import {onMounted, ref} from "vue";
import CalendarBodyContext from "./CalendarBodyContext.vue";

const props = defineProps({
  propsData: {
    weekFirstDay: null,
    weekLastDay: null,
    standardMonth: 0,
  }
})

const dateList = ref([]);

onMounted(foo)

function foo() {
  const { weekFirstDay, weekLastDay, standardMonth } = props.propsData;
  let date = addDays(weekFirstDay, 0);

  while(date < weekLastDay) {
    dateList.value.push(createData(date, standardMonth));

    date = addDays(date, 1);
  }
}

const createData = (date, standardMonth) => {
  const month = date.getMonth() + 1;

  return standardMonth === month ? {
    year: date.getFullYear(),
    month: month,
    date: date.getDate(),
  } : {};
}

</script>

<style scoped>

</style>
