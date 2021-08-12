import React from 'react'

const HistoryBox = () => {
    return (
        <div className='container max-w-full border border-black'>
            <h1 className='text-center title-profile m-2'>Donation History</h1>
            <div className='profile justify-between flex'>
                <div className='m-4'>
                    <p>Program title</p>
                </div>
                <div className='m-4'>
                    <p>[Amount]</p>
                </div>
            </div>
        </div>
    )
}

export default HistoryBox
