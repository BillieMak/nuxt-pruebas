<template>
  <h1>Home Page</h1>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
const {data} = await useFetch('/api/hello')
</script>
  