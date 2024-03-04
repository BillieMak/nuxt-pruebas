<template>
   <h1 class="text-center capitalize"> {{ $route.params.id }}</h1>
   <!-- <pre>{{ data }}</pre> -->
    <main>
      <img :src="img" :alt="$route.params.id" width="200" height="200">
      <!-- <img :src="`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`" :alt="$route.params.id" width="200" height="200"> -->
      <span>{{ data.id }}</span>
      <!-- <span>{{ data.id }}</span> -->
    </main>
</template>
<script setup>
const route = useRoute()
const { data } = await useFetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)

console.log(data._rawValue.id)

const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data._rawValue.id}.svg`

</script>