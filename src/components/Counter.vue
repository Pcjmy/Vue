<template>
  <div @click="$emit('update:modelValue', modelValue + 3)">{{ modelValue }}</div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
