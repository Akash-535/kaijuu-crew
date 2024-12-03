import React from 'react'

const CommonButton = ({ commonButton }) => {
    return (
        <div>
            <button className='bg-[#FF002A] px-9 py-3 font-bold text-lg rounded-md text-white leading-[150%] hover:scale-105 duration-300 ease-linear'>{commonButton}</button>
        </div>
    )
}

export default CommonButton
