<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="message">
    <Child />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Child from '../components/Child'

// by providing a ref, the GrandChild
// can react to changes happening here.
const message = ref('hello')
provide('message', message)
</script>
