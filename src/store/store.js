import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useThisYmStore = defineStore('thisYm', () => {
    const today = new Date()
    
    // state 정의
    const thisYm = reactive({
        year: today.getFullYear(),
        month: today.getMonth()
    })

    // getter

    // action
    function nextMonth() {
        thisYm.month++
    }
    
    function prevMonth() {
        thisYm.month--
    }

    return { thisYm, nextMonth, prevMonth }
})