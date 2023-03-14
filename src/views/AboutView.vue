<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="change">点击</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

interface Item {
  id: number;
  name: string;
}

export default Vue.extend({
  data() {
    return {
      items: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
      ] as Item[]
    }
  },
  methods: {
    change() {
      this.items[0].name = 'Orange';
    }
  }
})
</script>

<style>
ul {
  width: 50px;
}
</style>