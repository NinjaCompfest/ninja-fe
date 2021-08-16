import React from 'react'
import {FaCheckCircle} from "react-icons/fa"
import {FaTimesCircle} from "react-icons/fa"

const AdminWithdraw = (props) => {
    return (
        <div className='my-3'>
            <div className='container max-w-full border h-36 items-center'>
                <div className='profile justify-between flex mx-5'>
                    <div className='profile-info'>
                        <p className='my-3'>Fullname :</p>
                        <p className=''>Amount :</p>
                    </div>
                    <div className='profile-content'>
                        <p className='my-3'>{props.data.fullname}</p>
                        <p>{props.data.amount}</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <a href='#' className=' text-4xl my-3'><FaCheckCircle/></a>
                    <a href='#' className='mx-5 text-4xl my-3 remove' onClick={() => props.remove(props.data.id)}><FaTimesCircle/></a>
                </div>
            </div>
        </div>
    )
}

export default AdminWithdraw
