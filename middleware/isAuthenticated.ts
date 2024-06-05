import { useAuthStore } from '~/store/core/useAuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) { return }

  const authStore = useAuthStore()

  const isAuthenticated = await authStore.isAuthenticated()

  if (!isAuthenticated) {
    return navigateTo({
      path: '/login',
      query: {
        redirectUri: `${window.location.origin}${to.fullPath}`
      }
    })
  }
})
