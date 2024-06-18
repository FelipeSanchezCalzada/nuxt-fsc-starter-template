<script setup lang="ts">

definePageMeta({
  middleware: [
    'is-authenticated',
  ],
})

</script>

<template>
  <h1>Protected Page</h1>
</template>

<style scoped>

</style>
