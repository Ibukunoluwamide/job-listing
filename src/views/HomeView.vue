<script setup>
import { onMounted, ref } from 'vue'
import Navbar from '@/components/NavBar.vue'
import TopBanner from '@/components/TopBanner.vue';
import BottomBanner from '@/components/BottomBanner.vue';
import serverUrl from '@/server/url';
import axios from 'axios';
import { useRouter } from 'vue-router';
const jobsArray = ref([])
const router = useRouter();
const searchInput = ref('');
onMounted(async () => {
  try {
    const result = await axios.get(`${serverUrl}/job`); 
    console.log(result);
    jobsArray.value = result.data;
    return jobsArray.value;

  } catch (error) {
    console.error(error);
    return [];
  }
})
const searchBtn = () => {
    router.push({ path: '/listings/search', query: { query: searchInput.value } });
};
</script>

<template>
  <main>
    <Navbar />
    <!-- Showcase -->
    <section class="showcase relative bg-cover bg-center bg-no-repeat h-72 flex items-center">
      <div class="overlay"></div>
      <div class="container mx-auto text-center z-10">
        <h2 class="text-4xl  font-bold mb-4">Find Your Dream Job</h2>

           <!-- Search Form -->
    <form class="max-w-md mx-auto p-4" @submit.prevent="searchBtn">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="default-search" v-model="searchInput" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Job title..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
    </form>

      </div>
    </section><!-- Top Banner -->
    <TopBanner />
    <!-- Job Listings -->
    <section>
      <div class="container mx-auto p-4 mt-4">
        <div class="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">Recent Jobs</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">



          <div v-for="(job) in jobsArray.slice(0, 6)" :key="job.job_id" class="bg-gray-100 ">
            <div class="bg-white shadow-lg rounded-lg p-6">
              <div class="flex items-center mb-4">
                <div class="">
                  <h2 class="font-semibold text-gray-900">{{ job.company }}</h2>
                  <p class="text-gray-600">{{ job.location }}</p>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ job.title }}</h3>
              <p :class="{
                'text-yellow-500': job.jobType === 'part-time',
                'text-blue-500': job.jobType === 'remote',
                'text-green-500': job.jobType == 'full-time' 
              }" class="font-medium mb-2">
                {{ job.jobType }}
              </p>
              <p class="text-gray-600 mb-4">{{ job.requirements }}</p>
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold text-gray-900">${{ job.salary }}/monthly</p>
                <a :href="'mailto:' + job.email">
                  <button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Apply
                    Now</button>

                </a>
              </div>
            </div>
          </div>



        </div>
        <a href="/listings" class="block text-xl text-center hover:underline">
          <i class="fa fa-arrow-alt-circle-right"></i>
          Show All Jobs
        </a>
      </div>
    </section>



    <!-- Bottom Banner -->
    <BottomBanner />
  </main>

</template>
