<template>
  <NuxtLayout>
    <template #header>
      <h1>About</h1>
    </template>
  </NuxtLayout>

  <button class="text-white bg-blue-500 p-2 rounded">Click me</button>
  <button class="text-white bg-red-700 p-2 rounded">Click me</button>
  <NuxtLink class="text-white bg-green-600 p-2 rounded" to="/">Home</NuxtLink>
</template>
<script setup>
definePageMeta({
  layout: "about",
  middleware: "about",
});
</script>