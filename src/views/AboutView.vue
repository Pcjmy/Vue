<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="change">点击</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'AboutView',
  setup () {
    const items = reactive(['Apple', 'Banana', 'Cherry'])
    function change () {
      items[0] = 'Orange'
    }
    return { items, change }
  }
}
</script>

<style scoped>
ul {
  width: 100px;
}
</style>
