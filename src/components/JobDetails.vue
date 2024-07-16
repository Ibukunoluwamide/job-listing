<template>
  <Navbar />
  <!-- Top Banner -->
  <section class="bg-blue-900 text-white py-6 text-center">
    <div class="container mx-auto">
      <h2 class="text-3xl font-semibold">Unlock Your Career Potential</h2>
      <p class="text-lg mt-2">
        Discover the perfect job opportunity for you.
      </p>
    </div>
  </section>
  <section class="container mx-auto p-4 mt-4">
    <div class="rounded-lg shadow-md bg-white p-3">


      <div class="flex justify-between items-center">
        <a class="block p-4 text-blue-700" href="/listings">
          <i class="fa fa-arrow-alt-circle-left"></i>
          Back To Listings
        </a>
      </div>
      <div class="p-4">
        <h2 class="text-xl font-semibold">Backend engineering</h2>
        <p class="text-gray-700 text-lg mt-2">
          Making softwares </p>
        <ul class="my-4 bg-gray-100 p-4">
          <li class="mb-2"><strong>Salary:</strong> $50,000</li>
          <li class="mb-2">
            <strong>Location:</strong> Mbeya, Mwakibete
            <!-- <span class="text-xs bg-blue-500 text-white rounded-full px-2 py-1 ml-2">Local</span> -->
          </li>

        </ul>
        <h3 class="text-lg font-semibold mb-2 text-blue-500">
          Job Requirements
        </h3>
        <p>
          Laravel and livewire </p>
      </div>
    </div>
  </section>


  <!-- Bottom Banner -->
  <section class="container mx-auto my-6">
    <div class="bg-blue-800 text-white rounded p-4 flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">Looking to hire?</h2>
        <p class="text-gray-200 text-lg mt-2">
          Post your job listing now and find the perfect candidate.
        </p>
      </div>
      <a href="/listings/create"
        class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300">
        <i class="fa fa-edit"></i> Post a Job
      </a>
    </div>
  </section>
</template>

<script setup>
import Navbar from './NavBar.vue';
</script>

<style></style>