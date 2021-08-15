import React from 'react'

const WithdrawInfo = (props) => {
    return (
        <div>
            <p className='my-2'>{props.title}</p>
            <p className='my-2'>Donate Gathtered : Rp {props.donateGathered}</p>
        </div>
    )
}

export default WithdrawInfo
