<template>
  <section>
    <Navbar/>
    <div class="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-xl w-full mx-auto mt-8">
      <h2 class="text-4xl text-center font-bold mb-4">Create Job Listing</h2>
      <form @submit.prevent="handleSubmit" class="md:grid grid-cols-2 gap-4">
        <div class="mb-4 col-span-2">
          <input v-model="form.title" type="text" name="title" placeholder="Job Title" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4 col-span-2">
          <textarea v-model="form.description" name="description" placeholder="Job Description" class="w-full px-4 py-2 border rounded focus:outline-none"></textarea>
        </div>
        <div class="mb-4 col-span-2">
          
          <textarea v-model="form.requirements" type="text" name="requirements" placeholder="Requirements" class="w-full px-4 py-2 border rounded focus:outline-none"></textarea>
        </div>
        <div class="mb-4">
          <input v-model="form.location" type="text" name="location" placeholder="Location" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.salary" type="number" name="salary" placeholder="Salary" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.company" type="text" name="company" placeholder="Company Name" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <div class="mb-4">
          <input v-model="form.email" type="email" name="email" placeholder="Email Address For Applications" class="w-full px-4 py-2 border rounded focus:outline-none" />
        </div>
        <button type="submit" class="w-full col-span-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none">
          Post
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import Navbar from '@/components/NavBar.vue'

const form = reactive({
  title: '',
  description: '',
  location: '',
  salary: '',
  requirements: '',
  company: '',
  email: ''
})

const handleSubmit = () => {
  if (form.title && form.description && form.location && form.salary && form.requirements && form.company && form.email) {
    console.log('Job Listing Data:', form)
    // Additional form submission logic goes here
  } else {
    alert('Please fill in all fields')
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
