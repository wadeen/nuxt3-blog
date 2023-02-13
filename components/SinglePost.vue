<script setup >
// lang="ts"

import { marked } from "marked";
import PostTypes from '@/types/PostTypes';


const { post } = defineProps({ post: PostTypes });


// marked.setOptions({
//   highlight: code => {
//     return highlight.highlightAuto(code).value
//   }
// })

const markDownData = marked(post.fields.content);


</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{{ post.fields.title }}</h1>
      <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img :src="post.fields.featuredImage.fields.file.url" loading="lazy" alt="" class="w-full h-full object-cover object-center" />
      </div>
      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
        <div v-html="markDownData"></div>
      </p>
    </div>

  </div>
  </template>

<style scoped>
/* a11y-dark theme */
/* Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css */
/* @author: ericwbailey */

/* Comment */
.hljs-comment,
.hljs-quote {
 color: #d4d0ab;
}

/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
 color: #ffa07a;
}

/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
 color: #f5ab35;
}

/* Yellow */
.hljs-attribute {
 color: #ffd700;
}

/* Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
 color: #abe338;
}

/* Blue */
.hljs-title,
.hljs-section {
 color: #00e0e0;
}

/* Purple */
.hljs-keyword,
.hljs-selector-tag {
 color: #dcc6e0;
}

.hljs {
 display: block;
 overflow-x: auto;
 background: #2b2b2b;
 color: #f8f8f2;
 padding: 0.5em;
}

.hljs-emphasis {
 font-style: italic;
}

.hljs-strong {
 font-weight: bold;
}

@media screen and (-ms-high-contrast: active) {
 .hljs-addition,
 .hljs-attribute,
 .hljs-built_in,
 .hljs-builtin-name,
 .hljs-bullet,
 .hljs-comment,
 .hljs-link,
 .hljs-literal,
 .hljs-meta,
 .hljs-number,
 .hljs-params,
 .hljs-string,
 .hljs-symbol,
 .hljs-type,
 .hljs-quote {
       color: highlight;
   }

   .hljs-keyword,
   .hljs-selector-tag {
       font-weight: bold;
   }
}
</style>
