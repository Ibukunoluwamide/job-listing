<template>
  <NavBar/>
  <div class="flex justify-center items-center mt-20">
    <div class="bg-white p-4 md:p-8 rounded-lg max-w-md shadow-md w-full md:w-500 mx-6">
      <h2 class="text-4xl text-center font-bold mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <input v-model="form.email" type="text" name="email" placeholder="Email Address" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500" />
        </div>
        <div class="mb-4">
          <input v-model="form.password" type="password" name="password" placeholder="Password" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500" />
        </div>
        <button type="submit" class="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded focus:outline-none">
          Login
        </button>
        <p class="mt-4 text-gray-500">
          Don't have an account?
          <a class="text-blue-900" href="/register">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import NavBar from '@/components/NavBar.vue'
import axios from 'axios';
import serverUrl from '@/server/url';
import { useRouter } from 'vue-router';
const route = useRouter()
const form = reactive({
  email: '',
  password: ''
})

const handleLogin = () => {
  if (form.email && form.password) {
    console.log('Login Data:', form)
    // Additional login logic goes here
    axios.post(`${serverUrl}/login`, form)
    .then((result) => {
      console.log(result.data);
        Swal.fire({
          text: result.data?.message,
          icon: `${result.data?.status ? 'success' : 'error'}`,
          confirmButtonColor: '#047481'
        });
        if (result.data.status == true) {
          localStorage.setItem('user',JSON.stringify(result.data.user));
          route.push('/listings/create')
        }
    }).catch((err) => {
      
    });
  } else {
    Swal.fire({
      text: "Please fill in all fields!",
      icon: "error",
      confirmButtonColor: '#047481'
    });
    }
}
</script>

<style>
/* Add your custom styles here */
</style>
