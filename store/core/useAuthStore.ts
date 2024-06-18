import Keycloak from 'keycloak-js'
import type { Ref } from 'vue'

export const useAuthStore = defineStore('useAuthStore', () => {
  const keycloakInstance: Ref<Keycloak | null> = ref(null)

  const initKeycloak = async (force = false) => {
    if (!force && isInitialized.value) {
      return
    }

    const kc = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'test_realm',
      clientId: 'client_front',
    })

    try {
      const authenticated = await kc.init({
        checkLoginIframe: true,
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
      })
    } catch (error) {
      console.error('Failed to initialize adapter:', error)
    } finally {
      keycloakInstance.value = kc
    }
  }

  const login = (redirectUri: string | null = null) => {
    if (!keycloakInstance.value) {
      throw new Error('[useAuthStore] Call initKeycloak() before login()')
    }

    if (redirectUri) {
      return keycloakInstance.value.login({
        redirectUri,
      })
    }

    return keycloakInstance.value.login()
  }

  const logout = () => {
    if (!keycloakInstance.value) {
      throw new Error('[useAuthStore] Call initKeycloak() before logout()')
    }
    return keycloakInstance.value.logout()
  }

  const refreshTokenIfNeeded = () => {
    if (!keycloakInstance.value) {
      throw new Error('[useAuthStore] Call initKeycloak() before refreshTokenIfNeed()')
    }

    return keycloakInstance.value.updateToken()
  }

  const isAuthenticated = async () => {
    if (!keycloakInstance.value) {
      throw new Error('[useAuthStore] Call initKeycloak() before isAuthenticated()')
    }

    if (!keycloakInstance.value?.token) {
      return false
    }

    await refreshTokenIfNeeded()
    return !keycloakInstance.value.isTokenExpired()
  }

  const accessToken = computed(() => {
    const token = keycloakInstance.value?.token
    if (!token) {
      return null
    }
    return token
  })

  const isInitialized = computed(() => {
    return !!keycloakInstance.value
  })

  return {
    keycloakInstance,
    initKeycloak,
    login,
    logout,
    refreshTokenIfNeeded,
    isAuthenticated,
    isInitialized,
    accessToken,
  }
})
