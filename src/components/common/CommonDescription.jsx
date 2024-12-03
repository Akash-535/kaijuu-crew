import React from 'react'

const CommonDescription = ({ commonDescription }) => {
    return (
        <div>
            <p className='text-[22px] font-normal leading-[148%] text-white max-lg:text-lg max-md:text-base max-sm:text-sm'>{commonDescription}</p>
        </div>
    )
}

export default CommonDescription
