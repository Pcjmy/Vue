<template>
  <p>{{ test }}</p>
  <CustomModel v-model="test"></CustomModel>
</template>

<script setup>
import { ref } from "vue";
import CustomModel from "../components/CustomModel";
const test = ref("");
</script>

<style scoped></style>
