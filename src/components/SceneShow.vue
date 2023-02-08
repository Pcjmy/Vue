<template>
  <div>
    <img :src="url1" />
    <img :src="url2"/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  url1: String,
  url2: String,
})
</script>

<style scoped>
div {
  height: 100px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

img {
  height: 80px;
  width: 170px;
  border-radius: 10px;
}
</style>