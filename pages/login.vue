<template>
    <div>
        <NuxtLayout name="custom">
            <template #header>
               <h1>Login</h1>
            </template>

            <template #main>
               <p>Login Here</p>
            </template>
            <template #footer>
                <NuxtLink class="text-blue-500" to="/"> Back</NuxtLink>
            </template>
            <p>cuchi</p>
        </NuxtLayout>
    </div>
</template>
<script setup>
    definePageMeta({
        // layout: 'custom'
        layout:false
    })
</script>