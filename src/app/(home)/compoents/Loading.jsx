import React from 'react'

const Loading = () => {
  return (
    <div className="container container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5">
        <div className='border rounded p-4'>
            <div className='d-flex justify-content-center align-items-center'>
            
  <div className="spinner-border" role="status">
  </div>
  <span className="sr-only">&nbsp; Loading...</span>

            </div>
           
           </div>
        </div>
      </div> 
    </div>
  )
}

export default Loading