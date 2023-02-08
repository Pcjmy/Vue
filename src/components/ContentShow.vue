<template>
  <div class="item">
    <div class="logo"><img :src="url1"/><span>{{ msg1 }}</span></div>
    <div class="logo"><img :src="url2"/><span>{{ msg2 }}</span></div>
    <div class="logo"><img :src="url3"/><span>{{ msg3 }}</span></div>
    <div class="logo"><img :src="url4"/><span>{{ msg4 }}</span></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  url1: String,
  url2: String,
  url3: String,
  url4: String,
  msg1: String,
  msg2: String,
  msg3: String,
  msg4: String,
})
</script>

<style scoped>
.item {
  height: 70px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  background-color: white;
}

.logo {
  display: flex;
  flex-direction: column;
}

img {
  height: 50px;
}

span {
  font-size: 10px;
}
</style>