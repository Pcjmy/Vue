<template>
  <div class="about">
    <h1>This is an about page</h1>
    <component :is="tag"></component>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tag = ref('input')
</script>
