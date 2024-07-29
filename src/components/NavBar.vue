<template>

  <nav class="bg-white border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Job Finder</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 "
          v-if="!user">
          <li>
            <a href="/"
              class="block py-2 px-3   rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="/login"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Login</a>
          </li>
          <li>
            <a href="/register"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Register</a>
          </li>

        </ul>
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 "
          v-else>
          
          <li>
            <a href="/" class="block py-2 px-3 text-blue-900  md:p-0"> Welcome {{ user.name }}
            </a>
          </li>
          <li>
            <a href="/listings/posted-jobs" class="block py-2 px-3  rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
              aria-current="page">Posted Jobs</a>
          </li>
          <li>
            <a href="/listings/create"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded hover:shadow-md transition duration-300"><i
            class="fa fa-edit"></i> Post a Job</a>
          </li>
          <li>
            <button type="submit" class="block py-2 px-3 md:p-0 hover:underline" @click="logoutBtn">Logout</button>

          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { onMounted, ref } from 'vue'
const user = ref({})
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'))
  console.log(user.value);
})
const logoutBtn = () => {
  localStorage.removeItem('user')
  window.location.href = '/'
}
</script>

<style></style>