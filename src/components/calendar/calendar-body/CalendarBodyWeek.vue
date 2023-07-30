<template>
  <div class="calendar-body-week">
<!--    <CalendarBodyContext v-for="date in week" :date="date" />-->
  </div>
</template>

<script setup>
import CalendarBodyContext from "./CalendarBodyContext.vue";
import {computed} from "vue";

const props = defineProps({
  propsData: {
    weekCount: 0,
    standardDate: null,
  }
})

console.log(props.propsData);

const week = computed(() => {
  const { weekCount, standardDate } = props.propsData;

  standardDate.setDate(1 + (7 * weekCount));
  // 1, 8, 15, 22, 29

  const day = standardDate.getDay();



})
</script>

<style scoped>

</style>
