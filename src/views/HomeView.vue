<template>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="danger">Danger</Button>
  <Button type="warning">Warning</Button>
  <Button type="info">Info</Button>
  <Button disabled>Disabled</Button>
  <Transfer :data="data" v-model="value" />
  <Input placeholder="input search text" type="cache-search" />
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    id: 1,
    label: "Option1 ",
    disabled: false,
  },
  {
    id: 2,
    label: "Option2 ",
    disabled: false,
  },
  {
    id: 3,
    label: "Option3 ",
    disabled: true,
  },
  {
    id: 4,
    label: "Option4 ",
    disabled: false,
  },
]);
const value = ref([
  {
    id: 5,
    label: "Option5 ",
    disabled: true,
  },
]);
</script>

<style scoped></style>
