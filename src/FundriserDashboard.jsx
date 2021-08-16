import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar.js'
import ProfileBox from './components/ProfileBox'
import BalanceBoxFundriser from './components/BalanceBoxFundriser'
import FundrisingBoxFundriser from './components/FundrisingBoxFundriser'
import "./components/ProfileBox.css"

class FundriserDashboard extends Component {
    
    state = {
        post: [],
        programs: [],
        fundriser: [],
        link: "#",
        status: 'Logout',
        balance: 'props',
        username: 'uname',
        fullname: 'fname'
      }

    componentDidMount(){

        axios.get('http://localhost:3000/programs')
        .then((result) => {
          this.setState({
            programs: result.data
          })
        })

        axios.get('http://localhost:3000/fundrisers/1')
        .then((result) => {
          this.setState({
            fundriser: result.data
          })
        })

      }
      
      

    render(){
        return (
            <div className="bg-gray-300 min-h-screen">
                <Navbar status={this.state.status} link={this.state.link} />
                <div className='grid grid-cols-3 gap-4 self-center m-4 max-h-full'>
                    <div className='col-span-2'><BalanceBoxFundriser balance={this.state.fundriser.balance}/></div>
                    <div className=''>
                        <div className='container max-w-full border h-36 items-center'>
                        <h1 className='text-center title-profile m-2'>My Profile</h1>
                            <ProfileBox username={this.state.fundriser.uname} fullname={this.state.fundriser.fullname} />
                        </div>
                    </div>
                    <div className='col-span-3 flex justify-between'>
                        <p className='text-2xl mx-5 font-bold'>Program List</p>
                        <a href='/' className='topup-btn mx-5 px-6 py-1 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300'>Make New</a>
                    </div>
                    <div className='col-span-3'>
                    {
                        this.state.programs.map(programs => {
                        return <FundrisingBoxFundriser key={programs.id} title={programs.title} desc={programs.description} />
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default FundriserDashboard
