import React from 'react'

const FundrisingBox = (props) => {
    return (
        <div className='my-3'>
            <a href='#' className=''>
                <div className='container max-w-full border max-h-32'>
                    <div className='m-5'>
                        <p className='text-2xl mx-2 font-serif'>{props.title}</p>
                        <p className='truncate mx-2 font-sans'>{props.desc}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default FundrisingBox
