<script setup>
// lang="ts"
import PostTypes from "@/types/PostTypes";
import RichTextRenderer from "contentful-rich-text-vue-renderer";

const { post } = defineProps({ post: PostTypes });

// 記事コンテンツの取得
const postContent = post.fields.body;
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{{ post.fields.title }}</h1>
      <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img :src="post.fields.featuredImage.fields.file.url" loading="lazy" alt="" class="w-full h-full object-cover object-center" />
      </div>
      <div class="text-gray-500 sm:text-lg mb-6 md:mb-8 content">
        <RichTextRenderer :document="postContent" />
      </div>
    </div>
  </div>
</template>

<!-- RichTextRenderer: scopedを外す -->
<style lang="scss">
.content {
  color: #333;
  font-weight: 500;
  line-height: 1.5;
  background-color: #eee;
  padding: 30px;
  border-radius: 4px;
  h2 {
    font-weight: 900;
    font-size: 1.5em;
  }
  ul {
    list-style: outside;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
}
</style>
