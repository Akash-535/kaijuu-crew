import React from 'react'
import traitsImg from '../assets/images/webp/traits-chart-img.webp'
import CommonHeading from './common/CommonHeading'
import CommonDescription from './common/CommonDescription'
import { TraitIcon } from './common/Icons'
const TraitsSection = () => {
    return (
        <>
            <div className='bg-traits-bg bg-cover bg-no-repeat pt-24 pb-36 max-xl:pb-24 max-lg:py-20 max-md:py-14 max-sm:py-10 max-w-[1920px] mx-auto -mt-1'>
                <div className='container'>
                    <div className='text-center'>
                        <CommonHeading commonHeading="TRAITS" /></div>
                    <div className='flex max-lg:flex-col items-center pt-10 gap-6'>
                        <div className='w-7/12 max-lg:w-full'>
                            <img className='max-w-[738px] w-full' src={traitsImg} alt="img" />
                        </div>
                        <div className='w-5/12 max-lg:w-full flex max-lg:justify-center items-center max-2xl:w-1/2'>
                            <div className='max-w-[590px] w-full rounded-[30px] border border-white border-opacity-25 backdrop-filter p-11  backdrop-blur-[20px]'>
                                <div>
                                    <p className='upercase text-white font-godzilla text-5xl max-lg:text-4xl leading-86 '>Traits</p>
                                </div>
                                <div className='max-w-[505px] pb-0.5 opacity-25 my-[26px] bg-white'></div>
                                <div className='flex'>

                                    <div className='w-6/12'>
                                        <ul className='list-none'>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Background:8</li>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Skins:19</li>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Headwear:37</li>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Clothes:44</li>
                                        </ul>
                                    </div>
                                    <div className='w-6/12'>
                                        <ul className='list-none'>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Eyes:23</li>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Mouth:33</li>
                                            <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Accessories:7</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className='upercase text-white font-godzilla text-5xl max-lg:text-4xl leading-86 pt-14'>Stats</p>
                                <div className='max-w-[505px] pb-0.5 opacity-25 my-[26px] bg-white'></div>
                                <div className='flex'>
                                    <div className='w-5/12'>
                                        <p className='leading-150 text-white text-5xl max-lg:text-4xl max-md:text-3xl font-oswald font-bold'>9,999</p>
                                        <CommonDescription commonDescription='Total Kaijuu' />
                                    </div>
                                    <div className='w-7/12'>
                                        <div className='flex items-center gap-3'>
                                            <p className='leading-150 text-white text-5xl max-lg:text-4xl max-md:text-3xl font-oswald font-bold'>0.0555</p>
                                            <TraitIcon />
                                        </div>
                                        <CommonDescription commonDescription='Mint Cost' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TraitsSection
