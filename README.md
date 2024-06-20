# Nuxt FSC Starter

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)

Nuxt FSC Starter is an [nuxi init](https://nuxt.com/docs/api/commands/init) starter template for [Nuxt 3](https://nuxt.com/) to build modern 
web applications. This project is designed to provide a robust and scalable initial setup, facilitating the creation of high-performance and maintainable web applications.


## Table of Contents
- [Stack](#stack)
- [Utilities](#utilities)
- [Getting Started](#getting-started)
- [Util Information](#util-information)
    - [¿Why Tailwind Preflight are disabled?](#why-tailwind-preflight-are-disabled)
    - [¿How to use bun with WebStorm (Or other JetBrains IDEs)?](#how-to-use-bun-with-webstorm-or-other-jetbrains-ides)

## Stack
- [Bun](https://bun.sh/)
- [Nuext3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PrimeVue](https://primevue.org/)
- [TailwindCSS](https://tailwindcss.com/) (Preflight reset are disabled [see this for more info](https://tailwindcss.com/docs/preflight))
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)

## Utilities
- Keycloak plugin
- isAuthenticated middleware to protect only authenticated routes

## Getting Started

```bash
bunx nuxi@latest init --package-manager bun -t gh:FelipeSanchezCalzada/nuxt-fsc-starter-template <project-name>
