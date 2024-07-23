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


        <div v-for="(job) in jobsArray" :key="job.job_id" class="bg-gray-100 ">
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
    </div>
  </section>



  <!-- Bottom Banner -->
<BottomBanner/>
</template>

<script setup>
import Navbar from './NavBar.vue';
import { RouterLink } from 'vue-router';
import TopBanner from './TopBanner.vue';
import BottomBanner from './BottomBanner.vue';
import axios from 'axios';
import serverUrl from '@/server/url';
import {ref, onMounted} from 'vue'
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

<style></style>