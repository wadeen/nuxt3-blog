<script setup lang="ts">
const foo: string = "Hello by index.vue";
</script>

<template>
  {{ foo }}です
  <NuxtLink to="/about" class="hoge">Aboutページへ</NuxtLink>
</template>

<style scoped lang="scss">
.hoge {
  display: block;
  width: fit-content;
  &::before {
    content: "◯";
  }
}
</style>
