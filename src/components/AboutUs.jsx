import React from 'react'
import CommonHeading from './common/CommonHeading'
import CommonDescription from './common/CommonDescription'
import CommonButton from './common/CommonButton'
import cardImg from '../assets/images/webp/about-section-img-1.webp'
import cardImgTwo from '../assets/images/webp/about-section-img-2.webp'
import cardImgThree from '../assets/images/webp/about-section-img-3.webp'
import cardImgFour from '../assets/images/webp/about-section-img-4.webp'

const AboutUs = () => {
    return (
        <div id='about' className='bg-[#001120] pt-[61px] pb-[135px] max-xl:pb-20 max-lg:pb-16 max-md:py-14 max-sm:py-8'>
            <div className="container">
                <div className='flex gap-10 max-lg:gap-7 max-md:gap-4 max-lg:flex-col items-center justify-center'>
                    <div className='w-6/12 max-lg:w-full flex flex-col justify-center'>
                        <CommonHeading commonHeading="ABOUT" headingSpan="US" />
                        <div className='pb-8 pt-7 max-md:py-5 max-sm:py-3'><CommonDescription commonDescription="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." /></div>
                        <div>
                            <CommonButton commonButton="MINT NFT" />
                        </div>
                    </div>
                    <div className="w-6/12 ps-9 max-lg:w-full">
                        <div>
                            <div className="w-6/12 flex">
                                <img className='w-full max-w-[286px]' src={cardImg} alt="img" />
                                <img className='w-full max-w-[286px]' src={cardImgTwo} alt="img" />
                            </div>
                            <div className="w-6/12 flex">
                                <img className='w-full max-w-[286px]' src={cardImgThree} alt="img" />
                                <img className='w-full max-w-[286px]' src={cardImgFour} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
