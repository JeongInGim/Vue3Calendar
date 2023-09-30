import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const BASE_URL = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo`
const SERVICE_KEY_ENCODING = `VEscGOJDpIwuMSt5ztTVW8ebgGCtJ7QqhLJCleb%2F1R1gzwTRRB9WleAtSSop%2FmEfkHbZJ3zbJwAHQbco2noiCA%3D%3D`
const SERVICE_KEY_DECODING = `VEscGOJDpIwuMSt5ztTVW8ebgGCtJ7QqhLJCleb/1R1gzwTRRB9WleAtSSop/mEfkHbZJ3zbJwAHQbco2noiCA==`


export const useHolidayStore = defineStore('monthHoliday', () => { 
    const monthHoliday = ref([]) // 해당 연월의 공휴일 정보가 들어가야 함

    // 연과 월을 참고로 해서 해당 연월의 공휴일 오브젝트를 가져오는 action
    // dateKind: "01"
    // dateName: "추석"
    // isHoliday: "Y"
    // locdate: 20230928
    // seq: 1

    // 월단위? 연단위?
    async function setHoliday(year, month) {
        const url = `${BASE_URL}?serviceKey=${SERVICE_KEY_DECODING}&solYear=${year}&solMonth=${month}`
        const res = await axios.get(url)
        const holidayList = res.data.response.body.items.item
        let oneHolidayArr = []
        if (holidayList !== undefined && holidayList.dateKind !== undefined) {
            // 이번달 휴일이 1일일 때
            oneHolidayArr.push(holidayList)
            monthHoliday.value = oneHolidayArr
        } else {
            // 이번달 휴일이 아예 없을 때 or 2일 이상일 때
            monthHoliday.value = holidayList ?? []
        }
    }

    function isHoliday(dateToString) {
        const holidayList = monthHoliday.value
        let tempHolidayList = []
        if (holidayList[0] !== undefined) {
            for (let i=0; i<holidayList.length; i++) {
                if (holidayList[i].locdate.toString() === dateToString) {
                    tempHolidayList.push(holidayList[i].locdate)
                }
            }
        } 
        return tempHolidayList.length > 0
    }
    return { monthHoliday, setHoliday, isHoliday }
})