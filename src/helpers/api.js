import axios from 'axios'

const baseUrl = 'http://localhost:3001/jobs'

const fetchJobs = async () => {
  const request = await axios.get(`${baseUrl}`)
  return request.data
}

export default fetchJobs
