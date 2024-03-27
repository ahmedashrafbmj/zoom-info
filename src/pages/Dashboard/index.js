import React from 'react'
import SaveSearch from '../../components/modules/saveSearch'
import RecentContact from '../../components/modules/recentContact'
import RecentCompanies from '../../components/modules/recentCompanies'
import MiddleContent from '../../components/modules/middleContent'

const index = () => {
  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
          <SaveSearch/>
        <RecentContact/>
        <RecentCompanies/>
          </div>
        <div className='col-lg-8'>
        <MiddleContent/>
        </div>
        </div>
      </div>
        
    </div>
  )
}

export default index