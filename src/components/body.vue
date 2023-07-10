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
            lastDateOfThisMonth: null,
        }
    },
    created() {
        this.getDays()
        this.getDatesOfThisMonth()
    },
    methods: {
        getDays() {
            const today = new Date()
            this.currentYear = today.getFullYear()
            this.currentMonth = today.getMonth()
            // const firstDay = new Date(this.currentYear, this.currentMonth, '01').getDay()
            this.lastDateOfThisMonthObj = new Date(this.currentYear, this.currentMonth + 1, 0)
        },
        getDatesOfThisMonth() {
            let datesOfWeek = []
            const lastDateOfThisMonth = this.lastDateOfThisMonthObj.getDate()
            console.log(lastDateOfThisMonth)
            for (let i = 1; i <= lastDateOfThisMonth; i++) {
                console.log(i)
                datesOfWeek.push(i)
                if (i % 7 === 0) {
                    this.dates.push(datesOfWeek)
                    datesOfWeek = []
                }
                if (i === lastDateOfThisMonth) {
                    this.dates.push(datesOfWeek)
                }
            }
            console.log(this.dates)
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