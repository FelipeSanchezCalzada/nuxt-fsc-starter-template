import { useAuthStore } from '~/store/core/useAuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) { return }

  const { $keycloak } = useNuxtApp()
  if (!$keycloak.authenticated) {
    await $keycloak.login(
      {
        redirectUri: `${window.location.origin}${to.fullPath}`,
      },
    )
  }
})
