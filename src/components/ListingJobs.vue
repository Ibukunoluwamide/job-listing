<template>
  <Navbar />
  <!-- Top Banner -->
 <TopBanner/>

  <!-- Job Listings -->
  <section>
    <div class="container mx-auto p-4 mt-4">
      <div class="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
        All Jobs
      </div>


      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <!-- Job Listing 1: Software Engineer -->


        <div v-for="(job) in jobsArray" :key="job.job_id"
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ job.description }}</p>
          <p class="pb-4"><strong>Salary:</strong> {{ job.salary }}</p>
          <RouterLink :to="'/listings/' + job.job_id"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </RouterLink>

        </div>


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
import jobsArray from '@/router/jobs';
import Navbar from './NavBar.vue';
import { RouterLink } from 'vue-router';
import TopBanner from './TopBanner.vue';
</script>

<style></style>