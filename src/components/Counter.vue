<template>
  <div @click="$emit('add', 2)">{{ count }}</div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['count']
}
</script>
