<script>
import { ref } from 'vue'

export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    getHeader() {
      const today = new Date()
      const currentYear = today.getFullYear()
      const currentMonth = today.getMonth()
      const todaysDate = today.getDate()
      return `오늘은 ${currentYear}년 ${currentMonth + 1}월 ${todaysDate}일입니다.`
    }
  }
}
</script>

<template>
  <h1>{{ getHeader() }}</h1>
</template>

<style scoped>
</style>
