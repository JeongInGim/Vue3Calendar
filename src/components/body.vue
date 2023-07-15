<script>
export default {
    data() {
        return {
            days: [
                '일',
                '월',
                '화',
                '수',
                '목',
                '금',
                '토',
            ],
            dates: [],
            currentYear: null,
            currentMonth: null,
            lastDateOfThisMonthObj: null,
            firstWeek: [],
            firstDay: null,
            lastDay: null,
        }
    },
    created() {
        this.getDays()
        this.setFirstWeek()
        this.setDatesOfThisMonth()
    },
    methods: {
        getDays() {
            const today = new Date()
            this.currentYear = today.getFullYear()
            this.currentMonth = today.getMonth()
            this.firstDay = new Date(this.currentYear, this.currentMonth, '01').getDay()
            this.lastDateOfThisMonthObj = new Date(this.currentYear, this.currentMonth + 1, 0)
            this.lastDay = this.lastDateOfThisMonthObj.getDay()
        },
        setFirstWeek() {
            const length = this.days.length
            for (let j = 0; j < this.firstDay; j++) {
                this.firstWeek.push('')
            }
            for (let i = 0; i < length - this.firstDay; i++) {
                this.firstWeek.push(i + 1)
            }
            console.log(this.firstWeek)
        },
        setDatesOfThisMonth() {
            let datesOfWeek = []
            let count = 1
            this.dates.push(this.firstWeek)
            const lastDateOfThisMonth = this.lastDateOfThisMonthObj.getDate()
            for (let i = this.firstWeek[6] + 1; i <= lastDateOfThisMonth; i++) {
                // count++
                datesOfWeek.push(i)
                if (count % 7 === 0) {
                    this.dates.push(datesOfWeek)
                    datesOfWeek = []
                }
                if (i === lastDateOfThisMonth) {
                    this.dates.push(datesOfWeek)
                }
                count++
            }
            if (this.lastDay !== 6) {
                this.setLastWeek()
            }
        },
        setLastWeek() {
            // 마지막 날이 6요일이면
            // 스킵
            // 마지막 날이 0요일이면
            // 필요한 빈칸: 6개
            // 마지막 날이 1요일이면
            // 필요한 빈칸: 5개
            for (let i = 0; i < 6 - this.lastDay; i++) {
                const lastWeek = this.dates[this.dates.length - 1]
                lastWeek.push('')
            }
        }
    }
}
</script>
<template>
    <table>
        <thead>
            <th v-for="day in days">{{ day }}</th>
        </thead>
        <tbody>
            <tr v-for="week in dates">
                <td v-for="date in week">{{ date }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
table {
    display: inline;
    font-size: 30px;
}
th, td {
    padding: 10px 30px;
    text-align: center;
    border: 1px solid black;
    font-size: 20px;
}
th:nth-child(1), td:nth-child(1) {
    color: red;
}
th:nth-child(7), td:nth-child(7) {
    color: blue;
}
</style>