import React from 'react'

import spinner from 'assets/images/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt=""
    />
  )
}

export default Spinner
