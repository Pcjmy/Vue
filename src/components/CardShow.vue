<template>
  <div class="card">
    <div class="left">{{ msg1 }}</div>
    <div><img :src="url" /></div>
    <div class="right">{{ msg2 }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  msg1: String,
  url: String,
  msg2: String,
})
</script>

<style scoped>
.card {
  height: 100px;
  background-color: #39E5ED;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.left {
  margin-top: 40px;
  margin-left: 40px;
}

.right {
  margin-top: 40px;
}

img {
  position: absolute;
  height: 60px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>