// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    accessToken: process.env.NUXT_CTF_CDA_ACCESS_TOKEN || "",
    public: {
      spaceID: process.env.NUXT_CTF_SPACE_ID || "",
    },
  },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ["/"],
  //   },
  // },
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
