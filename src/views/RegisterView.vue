<template>
  <NavBar />
  <div class="flex justify-center items-center mt-20">
    <div class="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-md w-full md:w-500 mx-6">
      <h2 class="text-4xl text-center font-bold mb-4">Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <input v-model="form.name" type="text" name="name" placeholder="Full Name"
            class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.email" type="email" name="email" placeholder="Email Address"
            class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.city" type="text" name="city" placeholder="City"
            class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.state" type="text" name="state" placeholder="State"
            class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.password" type="password" name="password" placeholder="Password"
            class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.password_confirmation" type="password" name="password_confirmation"
            placeholder="Confirm Password" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <button type="submit"
          class="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded focus:outline-none">
          Register
        </button>
        <p class="mt-4 text-gray-500">
          Already have an account?
          <a class="text-blue-900" href="/login">Login</a>
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
  name: '',
  email: '',
  city: '',
  state: '',
  password: '',
  password_confirmation: ''
})

const handleSubmit = () => {
  if (form.password_confirmation != form.password) {
    Swal.fire({
      text: "Password does not match!",
      icon: "error"
    });
  }
  else if (form.name && form.email && form.city && form.state && form.password && form.password_confirmation) {
    console.log('Form Data:', form)
    // Additional form submission logic goes here
    axios.post(`${serverUrl}/users`, form)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          text: result.data?.message,
          icon: `${result.data?.status ? 'success' : 'error'}`,
          confirmButtonColor: '#047481'
        });
        if (result.data.status == true) {
          route.push('/login')
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
