<script setup>
import { useAsyncData, useNuxtApp } from "nuxt/app";

definePageMeta({
  layout: "custom",
});

const route = useRoute();
const id = route.params.id;
const { $client } = useNuxtApp();
const { data } = await useAsyncData(id, () => $client.getEntry(id));

console.log("$client: ", $client);
</script>

<template>
  <div>
    <SinglePost :post="data" />
  </div>
</template>

<style></style>
