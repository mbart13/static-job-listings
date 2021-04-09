const JobsReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_JOBS':
      const jobs = action.payload.map((job) => {
        job.filterCategories = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ]
        return job
      })
      return { ...state, jobs, isLoading: false, isError: false }

    case 'ADD_FILTER':
      if (!state.filters.includes(action.payload)) {
        return {
          ...state,
          filters: [...state.filters, action.payload],
        }
      }
      return state

    case 'REMOVE_FILTER':
      const newFilters = state.filters.filter((item) => item !== action.payload)

      return {
        ...state,
        filters: newFilters,
      }

    case 'CLEAR_FILTERS':
      return { ...state, filters: [] }

    case 'ERROR':
      return { ...state, isError: true, isLoading: false }

    default:
      return state
  }
}

export default JobsReducer
