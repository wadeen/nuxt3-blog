<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">ブログ記事一覧</h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">contentfulで管理しているブログの一覧です。<br />ページネーションやカテゴリ分類についてもやります！！</p>
      </div>
      <!-- Loading Skelton -->
      <!-- <div v-if="!data" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 animate-pulse">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div> -->
      <!-- Loading Posts -->
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        <li v-for="post in data?.items" :key="post.id">
          <PostCard :post="post" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from "nuxt/app";
// import contentful from "contentful";
const { $client } = useNuxtApp();

const data = await $client.getEntries();
</script>
