import React from 'react'
import { Link } from 'react-router-dom'

const RecentCompanies = () => {
  return (
    <div className='side-box'>
    <h3>Recent Viewed companies</h3>
    <p>You haven't visisted any companies yet</p>
    <Link to='/search' className="btn prime-button">Search Now!</Link>
  </div>
  )
}

export default RecentCompanies