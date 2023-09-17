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
    async function setHoliday(year, month) {
        const url = `${BASE_URL}?serviceKey=${SERVICE_KEY_DECODING}&solYear=${year}&solMonth=${month}`

        await axios.get(url).then(res => {
            // console.log(res.data.response.body.items.item)
            const holidayList = res.data.response.body.items.item
            monthHoliday.value = holidayList
            // return holidayList
            // console.log(monthHoliday.value)
        })
    }

    return { monthHoliday, setHoliday }
})