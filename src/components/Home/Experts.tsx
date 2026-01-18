

import React from 'react'

const Experts = () => {

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <div className='m-6 '>
      <h1>Book your appointment</h1>
      <form onSubmit={handlesubmit} >
        <div>
          <p>Name</p>
          <p>Company email</p>
          <p>Phone number</p>
          <p>Service</p>
          <p>Send</p>
        </div>
      </form>
    </div>
  )
}

export default Experts

