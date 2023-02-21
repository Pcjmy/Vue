<template>
  <div>{{ count }}</div>
  <div>{{ value }}</div>
  <input ref="search" />
  <button @click="add">Click</button>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const count = ref(0);
let value = reactive([]);
const search = ref(null);

onMounted(() => {
  const input = search.value;
  input.addEventListener("input", fn);
});

function add() {
  count.value += 1;
  value = [];
  value.push(count.value);
}

function fn() {
  count.value += 1;
  value = [];
  // value.push(count.value);
  for (let i = 0; i < count.value + 1; i++) {
    value.push(i);
  }
}
</script>

<style scoped></style>
