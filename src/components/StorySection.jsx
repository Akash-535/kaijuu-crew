import React from 'react'
import iceDino from '../assets/images/webp/ice-dinosoure.webp'
import CommonHeading from './common/CommonHeading'
import CommonDescription from './common/CommonDescription'

const StorySection = () => {
    return (
        <>
            <div className='bg-[#001120] pt-16 pb-24 max-xl:pb-16 max-lg:py-12 max-md:py-10 -mt-1.5'>
                <div className='container'>
                    <div className='flex items-center max-lg:flex-col'>
                        <div className='w-6/12 max-lg:w-full'>
                            <img className='max-w-[619px] w-full pr-5' src={iceDino} alt="dino" />
                        </div>
                        <div className="w-6/12 max-lg:w-full max-lg:pt-4">
                            <div className='pb-7'>
                                <CommonHeading commonHeading='STORY' />
                            </div>
                            <CommonDescription commonDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StorySection
