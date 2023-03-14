<template>
  <div>
    <ul>
      <li v-for="(item,index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="change">点击</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default Vue.extend({
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry']
    }
  },
  methods: {
    change() {
      this.items[0] = 'Orange';
      console.log(this.items);
    }
  }
})
</script>

<style>
ul {
  width: 50px;
}
</style>