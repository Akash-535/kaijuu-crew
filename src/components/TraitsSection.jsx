import React from 'react'
import traitsImg from '../assets/images/webp/traits-chart-img.webp'
import CommonHeading from './common/CommonHeading'
import CommonDescription from './common/CommonDescription'
import { TraitIcon } from './common/Icons'
const TraitsSection = () => {
    return (
        <>
            <div id='traits' className='bg-traits-bg bg-cover bg-no-repeat pt-24 pb-36 max-xl:pb-24 max-lg:py-20 max-md:py-14 max-sm:py-10 bg-center mx-auto -mt-1'>
                <div className='container min-[1921px]:max-w-[1920px] mx-auto'>
                    <div className='text-center'>
                        <CommonHeading commonHeading="TRAITS" /></div>
                    <div className='flex max-xl:flex-col items-center pt-10 gap-6 justify-center'>
                        <div className='w-7/12 max-xl:w-full'>
                            <img className='w-[738px] max-w-none max-xl:w-full max-xl:max-w-[650px] max-xl:mx-auto' src={traitsImg} alt="img" />
                        </div>
                        <div className='w-5/12 max-xl:w-full flex max-xl:justify-center items-center max-2xl:w-1/2'>
                            <div className='w-[590px] max-xl:w-full max-xl:max-w-[590px] rounded-[30px] border border-white border-opacity-25 backdrop-filter p-11  backdrop-blur-[20px]'>
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
