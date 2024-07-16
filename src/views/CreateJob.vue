<template>
    <section>
        <Navbar/>
   <div class="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-xl w-full mx-auto mt-8">
    <h2 class="text-4xl text-center font-bold mb-4">Create Job Listing</h2>
    <form method="POST" action="/listings" class="md:grid grid-cols-2 gap-4">

              <div class="mb-4 col-span-2">
        <input type="text" name="title" placeholder="Job Title" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
      <div class="mb-4 col-span-2">
        <textarea name="description" placeholder="Job Description" class="w-full px-4 py-2 border rounded focus:outline-none"></textarea>
      </div>
      <div class="mb-4 col-span-2">
        <input type="text" name="location" placeholder="Location" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
      <div class="mb-4">
        <input type="text" name="salary" placeholder="Salary" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
      <div class="mb-4">
        <input type="text" name="requirements" placeholder="Requirements" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
    

      <div class="mb-4">
        <input type="text" name="company" placeholder="Company Name" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
      <div class="mb-4">
        <input type="email" name="email" placeholder="Email Address For Applications" class="w-full px-4 py-2 border rounded focus:outline-none" value="" />
      </div>
      <button class="w-full col-span-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none">
        Post
      </button>
     
    </form>
  </div>
</section>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue';

</script>

<style>

</style>