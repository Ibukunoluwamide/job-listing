import serverUrl from '@/server/url';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const jobsArray = ref([]);

const fetchJobs = async () => {
  const router = useRouter();
   
  try {
    const result = await axios.get(`${serverUrl}/job`); // Assuming the endpoint is /jobs
    console.log(result);
    jobsArray.value = result;
    return jobsArray.value;

  } catch (error) {
    console.error(error);
    return [];
  }
};

export default{ fetchJobs };
