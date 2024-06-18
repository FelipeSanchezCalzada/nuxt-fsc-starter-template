<script setup lang="ts">
import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import { useAuthStore } from '~/store/core/useAuthStore'
import useAuthFetch from '~/composables/useAuthFetch'

const authStore = useAuthStore()
const { $authFetch } = useAuthFetch()

const login = () => {
  authStore.login()
}

const logout = async () => {
  await authStore.logout()
}

const doRequest = () => {
  $authFetch('https://dummyjson.com/test').then((response) => {
    console.log(response)
  })
}

</script>

<template>
  <div>
    <!--    <NuxtWelcome />-->
    <Button label="Login" @click="login" />
    <Button label="Logout" @click="logout" />

    <Button label="Request" @click="doRequest" />

    <NuxtPage />
  </div>
</template>
