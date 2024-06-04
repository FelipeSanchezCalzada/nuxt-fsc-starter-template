<script setup lang="ts">
import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import {useAuthStore} from '~/store/core/useAuthStore'
import useAuthFetch from '~/composables/useAuthFetch'


const authStore = useAuthStore()
const authFetch = useAuthFetch()

const login = () => {
  authStore.login()
}

const logout = async () => {
  await authStore.logout()
}

</script>

<template>
  <div>
<!--    <NuxtWelcome />-->
    <Button label="Login" @click="login" />
    <Button label="Logout" @click="logout" />

    <NuxtPage></NuxtPage>
  </div>
</template>
