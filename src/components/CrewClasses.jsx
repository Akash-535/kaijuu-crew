import React from 'react'
import CommonHeading from './common/CommonHeading'
import { Tilt } from 'react-tilt'
import { CREW_CLASSES_DATA } from './common/Helper'

const CrewClasses = () => {
    return (
        <div className='bg-crew-bg pt-[170px] max-xl:py-32 max-lg:py-24 max-md:py-20 max-sm:py-14 pb-56 bg-cover bg-no-repeat bg-center mx-auto px-16 -mt-1'>
            <div className='container min-[1921px]:max-w-[1920px]'>
                <div className='text-center pb-2'>
                    <CommonHeading commonHeading="Kaijuu" headingSpan="Crew Classes" />
                </div>
            </div>
            <div className='flex items-center justify-evenly gap-6 pt-20 flex-wrap min-[1921px]:max-w-[1920px] mx-auto'>
                {CREW_CLASSES_DATA.map((item, i) => (
                    <div className='max-w-[254px] max-md:max-w-56'>
                        <Tilt>
                            <img src={item.crewImg} alt="crew image" />
                        </Tilt>
                        <p className='font-semibold text-4xl text-white text-center pt-4 leading-[150%] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default CrewClasses
