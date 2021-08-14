import React from 'react'
import BalanceBox from './components/BalanceBox'
import FundrisingBox from './components/FundrisingBox'
import HistoryBox from './components/HistoryBox'
import Navbar from './components/Navbar.js'
import ProfileBox from './components/ProfileBox'

function DonatorDashboard() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <div className='grid grid-cols-3 gap-4 self-center m-4 max-h-full'>
        <div className='col-span-2'><BalanceBox /></div>
        <div className=''><ProfileBox /></div>
        <div className='col-span-3 text-2xl'>Program List</div>
        <div className='col-span-2'>
          <div className='overflow-auto h-screen'>
            <FundrisingBox />
            <FundrisingBox />
            <FundrisingBox />
            <FundrisingBox />
            <FundrisingBox />
          </div>
        </div>
        <div className=''><HistoryBox /></div>
      </div>
    </div>
  );
}

export default DonatorDashboard
