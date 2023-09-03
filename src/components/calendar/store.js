import {defineStore} from "pinia";
import {addDays, addMonths, format, setDate} from "date-fns";
import {computed, ref, watchEffect} from "vue";

export const useCalendar = defineStore('calendar', () => {
  const calendarDate = ref(new Date());
  const list = ref([]);

  const increase = () => {
    calendarDate.value = addMonths(calendarDate.value, 1)
  }

  const decrease = () => {
    calendarDate.value = addMonths(calendarDate.value, -1)
  }

  const initList = () => {
    list.value = [];
  }

  const createList = () => {
    const createPropsData = index => {
      const standardDate = setDate(calendarDate.value, 1 + (index * 7));
      const day = standardDate.getDay();

      return {
        weekFirstDay: addDays(standardDate, -day),  // 주의 첫번째 일자
        weekLastDay: addDays(standardDate, 7 - day),  // 주의 마지막 일자
        standardMonth: calendarDate.value.getMonth() + 1,
      }
    }

    list.value = [0, 0, 0, 0, 0, 0].map((empty, index) => createPropsData(index));
  }

  const formatDate = computed(() => format(calendarDate.value, 'yyyy-MM-dd'));

  watchEffect(() => {
    initList();
    createList();
  })

  return {
    calendarDate,
    list,
    increase,
    decrease,
    formatDate,
  }
})
