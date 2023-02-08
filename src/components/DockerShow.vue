<template>
  <div class="docker">
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
  msg1: String,
  url2: String,
  msg2: String,
  url3: String,
  msg3: String,
  url4: String,
  msg4: String,
})
</script>

<style scoped>
.docker {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  position: absolute;
  padding: 0 18px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #136DC5;
}

.logo {
  display: flex;
  flex-direction: column;
}

img {
  height: 35px;
}

span {
  font-size: 10px;
}
</style>