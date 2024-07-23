<template>
  <Navbar/>
  <div class="bg-gray-100 mt-4">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-lg rounded p-4 max-w-xl mx-auto ">
      <h2 class="text-4xl text-center font-bold mb-4 ">Create Job</h2>
     <div class="md:grid grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 font-semibold mb-2">Job Title</label>
        <input
          type="text"
          id="title"
          v-model="form.title"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <div class="mb-4">
        <label for="company" class="block text-gray-700 font-semibold mb-2">Company</label>
        <input
          type="text"
          id="company"
          v-model="form.company"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <div class="mb-4">
        <label for="location" class="block text-gray-700 font-semibold mb-2">Location</label>
        <input
          type="text"
          id="location"
          v-model="form.location"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <div class="mb-4">
        <label for="salary" class="block text-gray-700 font-semibold mb-2">Salary</label>
        <input
          type="number"
          id="salary"
          v-model="form.salary"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-semibold mb-2">Job Description</label>
        <textarea
          id="description"
          v-model="form.description"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        ></textarea>
      </div>
  
      <div class="mb-4">
        <label for="requirements" class="block text-gray-700 font-semibold mb-2">Requirements</label>
        <textarea
          id="requirements"
          v-model="form.requirements"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        ></textarea>
      </div>
    
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-semibold mb-2">Job Type</label>
        <select v-model="form.jobType" required class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500">
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="remote">Remote</option>
        </select>
      </div>
     </div>
      <div class="text-right w-full">
        <button type="submit" class="bg-green-500 w-full text-white font-bold py-2 px-4 rounded hover:bg-green-600">
          Post Job
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue';
import { reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import serverUrl from '@/server/url';

const form = reactive({
      title: '',
      description: '',
      location: '',
      salary: '',
      requirements: '',
      company: '',
      email: '',
      jobType: 'full-time',
      user_id: JSON.parse(localStorage.getItem('user')).user_id || null
    });

    const router = useRouter();

    const handleSubmit = () => {
      if (form.title && form.description && form.location && form.salary && form.requirements && form.company && form.email && form.jobType) {
        console.log('Job Listing Data:', form);
        // Additional form submission logic goes here
        axios.post(`${serverUrl}/job`, form)
          .then((result) => {
            console.log(result.data);
            Swal.fire({
              text: result.data?.message,
              icon: result.data?.status ? 'success' : 'error',
              confirmButtonColor: '#047481',
            });
            if (result.data.status) {
              router.push('/');
            }
          });
      } else {
        Swal.fire({
          text: 'Please fill in all fields!',
          icon: 'error',
          confirmButtonColor: '#047481',
        });
      }
    };
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
