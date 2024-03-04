<template>
  <h1 class="text-center">PostsPage</h1>
  <div class="flex gap-4">
    <!-- <NuxtLink class="text-blue-500 ml-2" v-for="i in items" :key="i"   :to="`posts/${i}`">Page{{ i }}</NuxtLink> -->
 

      <!-- <NuxtLink lass="text-blue-500 ml-2" v-for="i in data.results" :key="i" :to="`posts/${i.name}`">{{ i.name }}</NuxtLink> -->
      <NuxtLink lass="text-blue-500 ml-2" v-for="i in data.results" :key="i" :to="`posts/${i.name}`">
        {{ i.name }}  
      </NuxtLink>

 </div>
</template>
<script setup>

const { data } = await useFetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')

</script>