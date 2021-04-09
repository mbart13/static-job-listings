import axios from 'axios'

const baseUrl = 'http://static-job-listings-backend.vercel.app/api'

const fetchJobs = async () => {
  const request = await axios.get(`${baseUrl}`)
  return request.data
}

export default fetchJobs
