<script lang="ts" setup>
// @ts-ignore // Todo: エラー解決する
import dateToString from "/plugins/dateToString";
// @ts-ignore // Todo: エラー解決する
import PostTypes from "/types/PostTypes";

const { post } = defineProps({ post: PostTypes });
</script>

<template>
  <NuxtLink :to="`/post/${post.sys.id}`" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
    <img :src="post.fields.featuredImage.fields.file.url" alt="" />

    <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

    <div class="relative p-4 mt-auto">
      <p class="block text-gray-200 text-sm">{{ dateToString(post.fields.createdAt, "YYYY/MM/DD") }}</p>
      <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">
        {{ post.fields.title }}
      </h2>
      <span class="text-indigo-300 font-semibold" aria-label="もっと見る">more...</span>
    </div>
  </NuxtLink>
</template>
