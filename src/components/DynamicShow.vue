<template>
  <div class="dynamic">
    <div class="photo">
      <img :src="url" />
      <span>{{ username }}</span>
      <span>{{ age }}</span>
    </div>
    <div>
      {{ msg }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  url: String,
  msg: String,
  username: String,
  age: Number,
})
</script>

<style scoped>

.dynamic {
  background: white;
  margin-top: 5px;
}

.photo {
  margin-left: -150px;
}

span {
  padding: 6px;
}

img {
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
}
</style>
