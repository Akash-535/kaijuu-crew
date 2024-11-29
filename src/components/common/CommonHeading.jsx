import React from 'react'

const CommonHeading = ({ commonHeading, headingSpan }) => {
    return (
        <div>
            <h2 className='text-7xl font-godzilla font-normal text-[#FF002A] max-xl:text-6xl max-lg:text-5xl max-md:text-4xl'>{commonHeading} <span className='text-white'>{headingSpan}</span></h2>
        </div>
    )
}

export default CommonHeading
