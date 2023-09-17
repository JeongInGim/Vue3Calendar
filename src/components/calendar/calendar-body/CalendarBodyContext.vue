<template>
  <div class="calendar-body-week-context" :class="{isHoliday : d.isHoliday}">{{ d.date }}</div>
</template>

<script setup>

const props = defineProps({
  d: {}
})

// const d = props

</script>

<style scoped>
.isHoliday {
  color: red;
}
</style>
