import {useAuthStore} from '~/store/core/useAuthStore'

type NuxtFetchType = typeof $fetch

export default function useAuthFetch() {
  const authStore = useAuthStore()

  const authFetch: NuxtFetchType = (request, opts) => {
    const token = authStore.accessToken

    opts = opts || {}
    opts.headers = opts.headers || {}
    opts.headers['Authorization'] = `Bearer ${token}`

    return $fetch(request, opts)

  }

  return {
    authFetch
  }

}