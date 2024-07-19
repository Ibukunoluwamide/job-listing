<template>
  <Navbar />
  <!-- {{ $route.params.id }} -->
  <!-- Top Banner -->
 <TopBanner/>
  <section class="container mx-auto p-4 mt-4">
    <div class="rounded-lg shadow-md bg-white p-3">


      <div class="flex justify-between items-center">
        <a class="block p-4 text-blue-700" href="/listings">
          <i class="fa fa-arrow-alt-circle-left"></i>
          Back To Listings
        </a>
      </div>
      <div class="p-4">
        <h2 class="text-xl font-semibold">{{ currentJob.title }}</h2>
        <p class="text-gray-700 text-lg mt-2">
          {{ currentJob.description }}</p>
        <ul class="my-4 bg-gray-100 p-4">
          <li class="mb-2"><strong>Salary:</strong> {{ currentJob.salary }}</li>
          <li class="mb-2">
            <strong>Location:</strong> {{ currentJob.location }}
            <!-- <span class="text-xs bg-blue-500 text-white rounded-full px-2 py-1 ml-2">Local</span> -->
          </li>

        </ul>
        <h3 class="text-lg font-semibold mb-2 text-blue-500">
          Job Requirements
        </h3>
        <p>
          {{ currentJob.requirements }}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
    <p class="my-5 text-center">
        Put "Job Application" as the subject of your email and attach your resume.
    </p>
  
    <a :href="'mailto:' + currentJob.email" class="block max-w-md text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
        Apply Now
    </a>
</div>

    </div>
  </section>


  <!-- Bottom Banner -->
   <BottomBanner/>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import Navbar from './NavBar.vue';
import jobsArray from '@/stores/jobs';
import { useRoute } from 'vue-router';
import TopBanner from './TopBanner.vue';
import BottomBanner from './BottomBanner.vue';
const currentJob = ref({})
const route = useRoute()
onMounted(() => {
  const jobId = route.params.id;
      const job = jobsArray.find(job => job.job_id === jobId);
      console.log(job);
      currentJob.value = job
})
</script>

<style></style>