import React from 'react'
import { FaUser } from "react-icons/fa6";
import './style.css'
const RecentContact = () => {
  return (
    <div className='side-box'>
      <h3>Recent Viewed Contacts</h3>
      <div className='profile'>
        <div className='user-icon'><FaUser color='#727272' className='icon' size={14}/></div>
        <div className='user-detail'>
          <h4 className='user-name'>Hello Test</h4>
          <p className='user-bio'>Hello Test Hello TestHello TestHello TestHello Test </p>
        </div>

      </div>
    </div>
  )
}

export default RecentContact