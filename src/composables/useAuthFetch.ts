type NuxtFetchType = typeof $fetch

export default function useAuthFetch () {
  const $authFetch: NuxtFetchType = async (request, opts) => {
    const { $keycloak } = useNuxtApp()
    await $keycloak.updateToken(10)
    if (!await $keycloak.authenticated) {
      $keycloak.login(
        {
          redirectUri: document.location.href,
        },
      )
    }

    const parsedOptions = {
      ...opts,
      headers: {
        ...opts?.headers,
        Authorization: `Bearer ${$keycloak.token}`,
      },
    }

    return await $fetch(request, parsedOptions)
  }

  return {
    $authFetch,
  }
}
