import React from 'react'
import './BalanceBox.css'

const BalanceBox = () => {
    return (
        <div className='container max-w-full flex justify-between h-36'>
            <div className='balanceContain py-5 self-center'>
                <p className='text-3xl px-5'>Balance</p>
                <p className='text-3xl px-5 py-2'>[Rp ---]</p>
            </div>
            <div className='button items-center self-center'>
                <a href='/' className='topup-btn m-5 px-6 py-1 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300'>Top Up</a>
            </div>
        </div>
    )
}

export default BalanceBox
