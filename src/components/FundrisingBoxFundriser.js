import React from 'react'

const FundrisingBoxFundriser = () => {
    return (
        <div>
            <div className='container max-w-full border border-black max-h-32'>
                <div className='flex justify-between'>
                    <div className='m-5'>
                        <p className='text-2xl mx-2 font-serif'>Title Program</p>
                        <p className='truncate mx-2 font-sans'>Program Description</p>
                    </div>
                    <div className='items-center self-center'>
                        <a href='/' className='topup-btn m-5 px-6 py-1 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300'>Withdraw</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundrisingBoxFundriser
