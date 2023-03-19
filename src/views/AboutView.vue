<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter :count="count" @add="handleAdd" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'AboutView',
  components: { Counter },
  setup () {
    const count = ref(1)
    function handleAdd (param) {
      count.value += param
    }
    return { count, handleAdd }
  }
}
</script>

<style scoped>
ul {
  width: 100px;
}
</style>
