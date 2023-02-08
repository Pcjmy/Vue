<template>
  <div class="part">
    <div><img :src="url1" /><span>{{ msg1 }}</span></div>
    <div><img :src="url2" /><span>{{ msg2 }}</span></div>
    <div><img :src="url3" /><span>{{ msg3 }}</span></div>
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
})
</script>

<style scoped>
.part {
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.part div {
  background: white;
}

img {
  height: 40px;
}

span {
  margin-top: -20px;
}
</style>