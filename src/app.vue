<script setup lang="ts">
import 'primevue/resources/themes/aura-dark-noir/theme.css'
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
    <!--        Uncomment this to see login, logout, and request examples-->
    <div class="my-5">
      <Button class="mx-2" label="Login" @click="login" />
      <Button class="mx-2" label="Logout" @click="logout" />
      <Button class="mx-2" label="Request" @click="doRequest" />
    </div>

    <NuxtWelcome />

    <NuxtPage />
  </div>
</template>
