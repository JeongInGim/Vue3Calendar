<template>
  <div class="calendar-body-week">
    <CalendarBodyContext v-for="(date, i) in dateList" :key="i"  :d="date" />
  </div>
</template>

<script setup>
import {addDays} from "date-fns";
import {onMounted, ref, watchEffect} from "vue";
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

// 화살표 함수는 위쪽에
// 라이프사이클 훅은 되도록 아래에 두기(렌더링 꼬임)
// watcher: 특정 값이 바뀌는 것을 탐지하고 그 후에 이 동작을 하세요(mounted 뒤에 일어나는 일)
// 이 어플리케이션에서는 onMounted의 역할을 대부분 포함함
watchEffect(() => {
  // const { propsData } = props;
  // console.log(propsData)
  const {weekFirstDay, weekLastDay, standardMonth} = props.propsData
  // console.log(value)
  foo(weekFirstDay, weekLastDay, standardMonth)
})


// onMounted: 렌더링 후 마운트 될 때 이 동작을 하세요
// onMounted(foo)



function foo(weekFirstDay, weekLastDay, standardMonth) {
  console.log('foo')
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
