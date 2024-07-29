<template>
    <Navbar />
    <div class="bg-gray-100 p-4">
      <!-- Job Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div v-for="(job, index) in jobsArray" :key="job.job_id" class="bg-gray-100">
          <div class="bg-white shadow-lg rounded-lg p-6 min-h-[47vh]">
            <div class="flex items-center">
              <div>
                <h2 class="font-semibold text-gray-900">{{ job.company }}</h2>
                <p class="text-gray-600">{{ job.location }}</p>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ job.title }}</h3>
            <p :class="getJobTypeClass(job.jobType)" class="font-medium mb-2">{{ job.jobType }}</p>
            <p class="text-gray-600 mb-4">{{ job.requirements }}</p>
            <div class="flex items-center justify-between">
              <p class="text-lg font-semibold text-gray-900">${{ job.salary }}/monthly</p>
            </div>
            <div class="flex mt-4">
              <button @click="editJob(job)"
                class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mr-2">Edit</button>
              <button @click="deleteJob(job.job_id)"
                class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Edit Job Modal -->
      <div v-if="showEditModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full mx-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Edit Job
              </h3>
              <button @click="showEditModal = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              <form @submit.prevent="handleEditSubmit">
                <div class="grid md:grid-cols-2 gap-4">
                  <div v-for="(field, index) in formFields" :key="index" class="mb-4">
                    <label :for="'edit-' + field.id" class="block text-gray-700 font-semibold mb-2">{{ field.label }}</label>
                    <input v-if="field.type === 'input'" :id="'edit-' + field.id" v-model="editForm[field.model]" :type="field.inputType" :required="field.required"
                      class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500">
                    <textarea v-if="field.type === 'textarea'" :id="'edit-' + field.id" v-model="editForm[field.model]" :required="field.required"
                      class="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-500"></textarea>
                  </div>
                </div>
                <div class="text-right">
                  <button type="submit" class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">Save Changes</button>
                  <button @click="showEditModal = false" type="button" class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 ml-2">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/NavBar.vue';
  import { reactive, ref, onMounted } from 'vue';
  import axios from 'axios';
  import serverUrl from '@/server/url';
  
  const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user_id : null;
  const jobsArray = ref([]);
  const showEditModal = ref(false);
  const editForm = reactive({
    job_id: null,
    title: '',
    description: '',
    location: '',
    salary: '',
    requirements: '',
    company: '',
    email: '',
    jobType: 'full-time'
  });
  
  const formFields = [
    { id: 'title', label: 'Job Title', model: 'title', type: 'input', inputType: 'text', required: true },
    { id: 'company', label: 'Company', model: 'company', type: 'input', inputType: 'text', required: true },
    { id: 'location', label: 'Location', model: 'location', type: 'input', inputType: 'text', required: true },
    { id: 'salary', label: 'Salary', model: 'salary', type: 'input', inputType: 'number', required: true },
    { id: 'description', label: 'Job Description', model: 'description', type: 'textarea', required: true },
    { id: 'requirements', label: 'Requirements', model: 'requirements', type: 'textarea', required: true },
    { id: 'email', label: 'Email', model: 'email', type: 'input', inputType: 'email', required: true },
  ];
  
  onMounted(async () => {
    try {
      const result = await axios.get(`${serverUrl}/job/${userId}`);
      jobsArray.value = result.data;
    } catch (error) {
      console.error(error);
    }
  });
  
  const getJobTypeClass = (jobType) => {
    return {
      'text-yellow-500': jobType === 'part-time',
      'text-blue-500': jobType === 'remote',
      'text-green-500': jobType === 'full-time'
    };
  };
  
  const editJob = (job) => {
    Object.assign(editForm, job);
    showEditModal.value = true;
  };
  
  const handleEditSubmit = async () => {
    try {
      const result = await axios.put(`${serverUrl}/job/${editForm.job_id}`, editForm);
      Swal.fire({
        text: result.data?.message,
        icon: result.data?.status ? 'success' : 'error',
        confirmButtonColor: '#047481',
      });
      if (result.data.status) {
        showEditModal.value = false;
        const index = jobsArray.value.findIndex(job => job.job_id === editForm.job_id);
        if (index !== -1) {
          jobsArray.value[index] = { ...editForm };
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const deleteJob = async (jobId) => {
    try {
      const result = await axios.delete(`${serverUrl}/job/${jobId}`);
      Swal.fire({
        text: result.data?.message,
        icon: result.data?.status ? 'success' : 'error',
        confirmButtonColor: '#047481',
      });
      if (result.data.status) {
        jobsArray.value = jobsArray.value.filter(job => job.job_id !== jobId);
      }
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  