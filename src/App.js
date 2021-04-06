import React, { useState, useEffect } from 'react'

import Footer from 'components/Footer/Footer'
import JobList from 'components/JobList/JobList'
import fetchJobs from 'helpers/api'
import Filters from 'components/Filters/Filters'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs().then((data) => setJobs(data))
  }, [])

  return (
    <div className="main-wrapper">
      <h1 className="sr-only">Job Listings</h1>
      <main>
        <Filters />
        <JobList jobs={jobs} />
      </main>
      <Footer />
    </div>
  )
}

export default App
