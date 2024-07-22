<template>
  <header class="bg-teal-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-semibold">
        <a href="/">Job Finder</a>
      </h1>
      <nav class="space-x-4" v-if="!user">
        <a href="/login" class="text-white hover:underline">Login</a>
        <a href="/register" class="text-white hover:underline">Register</a>
      </nav>
      <nav class="space-x-4" v-else>
        <div class="flex justify-between items-center gap-4">
          <div class="text-blue-500">
            Welcome {{ user.name }}
          </div>
        
          <button type="submit" class="text-white inline hover:underline" @click="logoutBtn">Logout</button>
          <a href="/listings/create"
            class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"><i
              class="fa fa-edit"></i> Post a Job</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import {onMounted,ref} from 'vue'
const user = ref({})
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
  console.log(user.value);
})
const logoutBtn = ()=>{
  localStorage.removeItem('user')
  window.location.href = '/'
}
</script>

<style></style>