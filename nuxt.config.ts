// import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/global.css"],
  app: {
    head: {
      title: "Ken Kozma",
    },
  },
})
