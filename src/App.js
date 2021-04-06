import React, { useState, useEffect } from 'react'

import Footer from 'components/Footer/Footer'
import JobList from 'components/JobList/JobList'
import fetchJobs from 'helpers/api'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs().then((data) => setJobs(data))
  }, [])

  return (
    <div className="main-wrapper">
      <JobList jobs={jobs} />
      <Footer />
    </div>
  )
}

export default App
