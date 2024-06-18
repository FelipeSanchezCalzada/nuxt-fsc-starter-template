import Keycloak from 'keycloak-js'

export default defineNuxtPlugin({
  name: 'keycloak-init',
  enforce: 'pre',
  hooks: {
    /**
     * Fix router issue, see : https://github.com/keycloak/keycloak/issues/14742
     */
    'app:created' () {
      const router = useRouter()
      // Here i'm using remeda, you can use you own logic.
      const {
        state,
        code,
        // eslint-disable-next-line camelcase
        session_state,
        iss,
        ...query
      } = router.currentRoute.value.query
      router.replace({ query })
    },
  },
  async setup () {
    const config = useRuntimeConfig()
    try {
      const keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'test_realm',
        clientId: 'client_front',
      })
      await keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
        responseMode: 'query',
      })
      return {
        provide: {
          keycloak,
        },
      }
    } catch (e) {
      console.log(e)
      throw createError({})
    }
  },
})
