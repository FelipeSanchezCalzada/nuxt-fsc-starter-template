<script setup lang="ts">
import 'primevue/resources/themes/aura-dark-cyan/theme.css'
import useAuthFetch from '~/composables/useAuthFetch'

const { $keycloak } = useNuxtApp()
const { $authFetch } = useAuthFetch()

const login = () => {
  $keycloak.login()
}

const logout = () => {
  $keycloak.logout()
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
