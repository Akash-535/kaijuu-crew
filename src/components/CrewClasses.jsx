import React from 'react'
import CommonHeading from './common/CommonHeading'
import crewCardImg from '../assets/images/webp/crew-classes-card-img1.webp'
import crewCardImgTwo from '../assets/images/webp/crew-classes-card-img2.webp'
import crewCardImgThree from '../assets/images/webp/crew-classes-card-img4.webp'
import blackBox from '../assets/images/webp/black-box.webp'
import { Tilt } from 'react-tilt'

const CrewClasses = () => {
    return (
        <>
            <div className='bg-crew-bg pt-[170px] max-xl:py-32 max-lg:py-24 max-md:py-20 max-sm:py-14 pb-56 bg-cover bg-no-repeat max-w-[1920px] mx-auto px-16 -mt-1'>
                <div className='container'>
                    <div className='text-center pb-2'>
                        <CommonHeading commonHeading="Kaijuu" headingSpan="Crew Classes" />
                    </div>
                </div>
                <div className='flex items-center justify-evenly gap-6 pt-20 flex-wrap'>
                    <div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>  <img src={crewCardImg} alt="img" /></Tilt>
                        <p className='font-oswald font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Scouts</p>
                    </div><div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>   <img src={crewCardImgTwo} alt="img" /></Tilt>
                        <p className='font-oswald font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Heavies</p>
                    </div>
                    <div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>  <img src={blackBox} alt="img" /></Tilt>
                        <p className='font-oswald font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Legends</p>
                    </div>
                    <div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>  <img src={crewCardImgThree} alt="img" /></Tilt>
                        <p className='font-oswald font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>Elementals</p>
                    </div>
                    <div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>    <img src={blackBox} alt="img" /></Tilt>
                        <p className='font-oswald font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>???</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CrewClasses
