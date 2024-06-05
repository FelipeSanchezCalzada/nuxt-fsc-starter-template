import { useAuthStore } from '~/store/core/useAuthStore'

type NuxtFetchType = typeof $fetch

export default function useAuthFetch () {
  const authStore = useAuthStore()

  const $authFetch: NuxtFetchType = async (request, opts) => {
    await authStore.refreshTokenIfNeeded()
    if (!await authStore.isAuthenticated()) {
      authStore.login(
        document.location.href
      )
    }

    const parsedOptions = {
      ...opts,
      headers: {
        ...opts?.headers,
        Authorization: `Bearer ${authStore.accessToken}`
      }
    }

    return await $fetch(request, parsedOptions)
  }

  return {
    $authFetch
  }
}
