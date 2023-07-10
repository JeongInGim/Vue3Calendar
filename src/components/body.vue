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
    },
    methods: {
        getDays() {
            const today = new Date()
            this.currentYear = today.getFullYear()
            this.currentMonth = today.getMonth()
            // const firstDay = new Date(this.currentYear, this.currentMonth, '01').getDay()
            this.lastDateOfThisMonth = new Date(this.currentYear, this.currentMonth, 0)
            console.log(this.lastDateThisMonth)
        },
        getDatesOfThisMonth() {

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
            <td>1</td>
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