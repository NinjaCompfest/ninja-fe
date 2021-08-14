import React from 'react'

const HistoryList = (props) => {
    return (
        <div>
            <div className='profile justify-between flex'>
                <div className='m-4'>
                    <p>{props.history}</p>
                </div>
                <div className='m-4'>
                    <p>{props.ammount}</p>
                </div>
            </div>
        </div>
    )
}

export default HistoryList
