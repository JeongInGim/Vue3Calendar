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
        if(thisYm.month === 11) {
            thisYm.year++
            thisYm.month = 0
        } else {
            thisYm.month++
        }
    }
    
    function prevMonth() {
        if(thisYm.month === 0) {
            thisYm.year--
            thisYm.month = 11
        } else {
            thisYm.month--
        }
    }

    return { thisYm, nextMonth, prevMonth }
})