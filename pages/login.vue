<script setup lang="ts">
import {useAuthStore} from '~/store/core/useAuthStore'

const authStore = useAuthStore()
const route = useRoute();

onBeforeMount(() => {

  const redirectUri = route.query.redirectUri ?? null

  console.log('redirectUri', redirectUri)

  authStore.login(redirectUri)
})

</script>

<template>

</template>

<style scoped>

</style>