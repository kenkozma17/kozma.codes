// import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/global.css"],
  app: {
    head: {
      title: "Ken Kozma",
    },
  },
})
