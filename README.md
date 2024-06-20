# Nuxt FSC Starter

This starter comes with:
- [Bun](https://bun.sh/)
- [Nuext3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PrimeVue](https://primevue.org/)
- [TailwindCSS](https://tailwindcss.com/) (Preflight reset are disabled [see this for more info](https://tailwindcss.com/docs/preflight))
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)

## Utilities
- Keycloak auth composable (useAuthStore)
- login page to manage redirects
- Initializations middleware
- isAuthenticated middleware to protect only authenticated routes

## Getting Started

```bash
bunx nuxi@latest init --package-manager	bun -t gh:FelipeSanchezCalzada/nuxt-fsc-starter-template <project-name>
```

> [!NOTE]  
> ¿Why Tailwind Preflight are disabled?
> 
> PrimeVue already comes with base styles. If we enable Tailwind Preflight, then the base PrimeVue styles will be broken.


## ¿How to use bun with WebStorm (Or other JetBrains IDEs)?
1. Make sure to configure **Node and NPM as interpreter and set the package manager** in Setting -> Languages and Frameworks -> Node.js
2. When you configure you run configuration, set the **Node interpreter to Bun**

This configuration is required to keep working ESLint execution in the IDE.