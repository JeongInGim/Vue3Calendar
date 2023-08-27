import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCalendarMonthStore = defineStore('calendarMonth', () => {
    const today = new Date()
    
    // state 정의
    const calendarMonth = ref(today.getMonth())

    // getter

    // action
    function nextMonth() {
        calendarMonth.value++
        console.log('in store: ', calendarMonth.value)
    }

    function prevMonth() {
        calendarMonth.value--
        console.log('in store: ', calendarMonth.value)
    }

    return { calendarMonth, nextMonth, prevMonth }
})