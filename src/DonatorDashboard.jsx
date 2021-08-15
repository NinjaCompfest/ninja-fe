import React, { Component } from 'react'
import BalanceBox from './components/BalanceBox'
import FundrisingBox from './components/FundrisingBox'
import Navbar from './components/Navbar.js'
import ProfileBox from './components/ProfileBox'
import axios from 'axios'
import HistoryList from './components/HistoryList'
import "./components/ProfileBox.css"

class DonatorDashboard extends Component {
  state = {
    post: [],
    link: "#",
    status: 'Logout',
    balance: 'props',
    username: 'uname',
    fullname: 'fname'
  }

  // jangan lupa buat API histori, ini pake satu aja.
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      this.setState({
        post: result.data
      })
    })
  }
  render(){
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar status={this.state.status} link={this.state.link} />
        <div className='grid grid-cols-3 gap-4 self-center m-4 max-h-full'>
          <div className='col-span-2'><BalanceBox balance={this.state.balance}/></div>
          <div className=''>
            <div className='container max-w-full border h-36 items-center'>
              <h1 className='text-center title-profile m-2'>My Profile</h1>
                  <ProfileBox username={this.state.username} fullname={this.state.fullname} />
            </div>
          </div>
          <div className='col-span-3 text-2xl font-bold'>Program List</div>
          <div className='col-span-2'>
            <div className='overflow-auto h-screen'>
              {
                this.state.post.map(post => {
                  return <FundrisingBox key={post.id} title={post.title} desc={post.body} />
                })
              }
            </div>
          </div>
          <div className=''>
            <div className='container max-w-full border'>
            <h1 className='text-center title-profile m-2'>Donation History</h1>
              <div className='overflow-auto h-80'>
                {
                  this.state.post.map(post => {
                    return <HistoryList key={post.id} history={post.title} ammount={post.id} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonatorDashboard
