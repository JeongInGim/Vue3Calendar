<template>
  <h1>{{ title }}</h1>
</template>

<script setup>

import {onMounted, watchEffect, ref} from "vue";
import { useThisYmStore } from "../store/store";
import { storeToRefs } from "pinia";

const title = ref(''); // 반응형 변수
const thisYmStore = useThisYmStore()
const { thisYm } = storeToRefs(thisYmStore)

const getHeader = () => {
  title.value = `${thisYm.value.year}년 ${thisYm.value.month + 1}월`;
}

watchEffect(() => {
  getHeader()
})

</script>

<style scoped>
</style>
