import React, { useEffect } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Footer from 'components/Footer/Footer'
import JobList from 'components/JobList/JobList'
import fetchJobs from 'helpers/api'
import Filters from 'components/Filters/Filters'
import JobsReducer from 'reducer/JobsReducer'

const initialState = {
  isLoading: true,
  isError: false,
  filters: [],
  jobs: [],
}

const store = createStore(JobsReducer, initialState)

function App() {
  useEffect(() => {
    fetchJobs()
      .then((data) => {
        store.dispatch({ type: 'DISPLAY_JOBS', payload: data })
      })
      .catch(() => {
        store.dispatch({ type: 'ERROR' })
      })
  }, [])

  return (
    <Provider store={store}>
      <div className="main-wrapper">
        <h1 className="sr-only">Job Listings</h1>
        <main>
          <Filters />
          <JobList />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
