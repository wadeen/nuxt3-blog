<script setup>
import { useAsyncData, useNuxtApp } from "nuxt/app";

definePageMeta({
  layout: "custom",
});

const route = useRoute();
const id = route.params.id;
const { $client } = useNuxtApp();
const { data } = await useAsyncData(id, () => $client.getEntry(id));
</script>

<template>
  <div>
    <SinglePost :post="data" />
  </div>
</template>

<style scoped lang="scss"></style>

<!-- 
const { data } = await useAsyncData('posts', async () => {
SSGの場合は、Generate時に1度だけここが処理される
 投稿一覧の取得
 const res = await axios.get(import.meta.env.VITE_MICRO_CMS_API_URL, {
  headers: {
  'X-MICROCMS-API-KEY': import.meta.env.VITE_MICRO_CMS_API_KEY,
  },
 })
return res.data.contents
   const posts = await main?.post?.readPosts()
 return posts
})
-->
