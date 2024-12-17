import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

const DashboardBar = ({toggleSidebar}) => {
  return (
    <div className="d-flex flex-wrap w-100 justify-content-between align-items-center searchbackground">
    <div className="d-flex justify-content-start align-items-center">
      <div>
        <span style={{ backgroundColor: 'transparent', border: 'none' }} onClick={toggleSidebar}>
          <MdDashboard size={25} className="me-2" />
        </span>
      </div>
      <div className="flex-grow-1 d-flex justify-content-center justify-content-md-start">
        <div className="input-container d-flex align-items-center ms-2">
          <FaSearch className="input-icon" />
          <input
            type="text"
            placeholder="Search"
            className="input-with-icon form-control"
          />
        </div>
      </div>
    </div>
    

  </div>
  )
}

export default DashboardBar
