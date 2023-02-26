<template>
  <input
    type="text"
    @input="emit('update:modelValue', $event.target.value)"
    :value="props.modelValue"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["update"]);
const props = defineProps({
  modelValue: String,
});
</script>
