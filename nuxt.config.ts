// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      spaceID: process.env.CTF_SPACE_ID || "",
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN || "",
      environment: process.env.CTF_SPACE_ID || "",
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  ssr: false,
  // target: "static",
  modules: ["@nuxtjs/tailwindcss"],
  // plugins: ["@/plugins/contentful"],

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "@/assets/_colors.scss" as *;',
    //     },
    //   },
    // },
  },
});
