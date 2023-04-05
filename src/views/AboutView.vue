<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <Teleport to="body">
      <!-- 使用这个 modal 组件，传入 prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal'

export default {
  name: 'AboutView',
  components: { Modal },
  setup () {
    const showModal = ref(false)
    return { showModal }
  }
}
</script>

<style scoped>
ul {
  width: 100px;
}
</style>
