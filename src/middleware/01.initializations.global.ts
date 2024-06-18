import { useAuthStore } from '~/store/core/useAuthStore'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) { return }

  const authStore = useAuthStore()
  await authStore.initKeycloak()
})
