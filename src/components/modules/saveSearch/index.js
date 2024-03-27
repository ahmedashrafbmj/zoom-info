import { Button } from 'bootstrap'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const SaveSearch = () => {
  return (
    <div className='side-box'>
        <h3>Recent Saved Searches</h3>
        <p>Track all relevant infromation for your taget market</p>
        <p>Check out the sample <Link href='#'>Fortune B2B search</Link>for you</p>
        <button className="btn prime-button">Build Your First List!</button>
    </div>
  )
}

export default SaveSearch