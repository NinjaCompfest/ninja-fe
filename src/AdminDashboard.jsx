import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import axios from 'axios'
import FundrisingBox from './components/FundrisingBox'
import AdminProfileBox from './components/AdminProfileBox.js'
import "./components/ProfileBox.css"

class AdminDashboard extends Component {
    state = {
        post: [],
        auth: [],
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

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          this.setState({
            auth: res.data
          })
        })        
      }
      render(){
        return (
          <div className="bg-gray-300 min-h-screen">
            <Navbar status={this.state.status} link={this.state.link} />
            <div className='grid grid-cols-3 gap-4 self-center m-4 max-h-full'>
                <div className='col-span-2'>
                    <p className='text-2xl my-1 mx-6 font-bold'>Program List</p>
                </div>
                <div>
                    <p className='text-2xl my-1 mx-6 font-bold'>Account List</p>
                </div>
                <div className='col-span-2'>
                    {
                        this.state.post.map(post => {
                        return <FundrisingBox key={post.id} title={post.title} desc={post.body} />
                        })
                    }
                </div>
                <div>
                    {
                    this.state.auth.map(auth => {
                        return <AdminProfileBox key={auth.id} uname={auth.username} fname={auth.name} />
                    })
                    }
                </div>
            </div>  
          </div>
        );
      }
}

export default AdminDashboard