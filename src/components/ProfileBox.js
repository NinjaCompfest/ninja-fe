import React from 'react'
import './ProfileBox.css'

const ProfileBox = (props) => {
    return (
        <div>
            <div className='profile justify-between flex mx-5'>
            <div className='profile-info'>
                <p className=''>Username :</p>
                <p className='my-3'>Fullname :</p>
            </div>
            <div className='profile-content'>
                <p>{props.username}</p>
                <p className='my-3'>{props.fullname}</p>
            </div>
            </div>
        </div>
    )
}

export default ProfileBox
