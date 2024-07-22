<script setup>
import { onMounted, ref } from 'vue'
import Navbar from '@/components/NavBar.vue'
import TopBanner from '@/components/TopBanner.vue';
import BottomBanner from '@/components/BottomBanner.vue';
import serverUrl from '@/server/url';
import axios from 'axios';
const jobsArray = ref([])
onMounted(async() => {
  try {
    const result = await axios.get(`${serverUrl}/job`); // Assuming the endpoint is /jobs
    console.log(result);
    jobsArray.value = result.data;
    return jobsArray.value;

  } catch (error) {
    console.error(error);
    return [];
  }
})
</script>

<template>
  <main>
 <Navbar/>
<!-- Showcase -->
<section class="showcase relative bg-cover bg-center bg-no-repeat h-72 flex items-center">
  <div class="overlay"></div>
  <div class="container mx-auto text-center z-10">
    <h2 class="text-4xl  font-bold mb-4">Find Your Dream Job</h2>
   
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job title..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>

  </div>
</section><!-- Top Banner -->
<TopBanner/>
<!-- Job Listings -->
<section>
  <div class="container mx-auto p-4 mt-4">
    <div class="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">Recent Jobs</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      
 

      <div v-for="(job) in jobsArray.slice(0, 6)" :key="job.job_id" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ job.description }}</p>
        <p class="pb-4"><strong>Salary:</strong> ${{ job.salary }}</p>
        <RouterLink :to="'/listings/' + job.job_id"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded hover:bg-teal-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </RouterLink>
    </div>


      
    </div>
    <a href="/listings" class="block text-xl text-center hover:underline">
      <i class="fa fa-arrow-alt-circle-right"></i>
      Show All Jobs
    </a>
    </div>
</section>



<!-- Bottom Banner -->
 <BottomBanner/>
  </main>

</template>
