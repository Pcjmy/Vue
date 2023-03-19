<template>
  <div @click="$emit('addOne')">{{ count }}</div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['count']
}
</script>
