<script setup lang="ts">
// @ts-ignore // Todo: エラー解決する
import PostTypes from "types/PostTypes";
// import marked from "marked"

// console.log("PostTypes: ", PostTypes);

const { post } = defineProps({ post: PostTypes });

// console.log("post.fields.richText.content: ",  JSON.stringify(post.fields.richText.content,null,'\t'));
// console.log("post.fields: ", post.fields.content);
// post.fields.richText.content[0].content[0].value

// post.fields.richText.content.map((post: any) => {
//   console.log('post: ', post)
// })

const markDownData = post.fields.content;

// console.log("markDownData: ", markDownData);

// 通常テキスト

// HTML欄
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{{ post.fields.title }}</h1>
      <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img :src="post.fields.featuredImage.fields.file.url" loading="lazy" alt="" class="w-full h-full object-cover object-center" />
      </div>
      <!-- <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“ {{ post.fields.summary }}”</blockquote> -->
      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
        <div v-html="markDownData" />
        <!-- <div v-text="post.fields.richText.content[0].content[0].value"></div> -->
      </p>
    </div>
  </div>
</template>
<style></style>
