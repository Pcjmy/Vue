<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="handleClick">{{ name }}</div>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
export default {
  name: 'AboutView',
  setup () {
    const name = ref('hello')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    const handleClick = () => {
      name.value = 'Pcjmy'
    }
    return { name, handleClick }
  }
}
</script>

<style scoped>
ul {
  width: 100px;
}
</style>
