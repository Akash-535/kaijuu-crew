import React from 'react'
import roadmapBox from '../assets/images/webp/roadmapbox.webp'
import roadmapBg from '../assets/images/webp/roadmap-bg.webp'
import topLine from '../assets/images/webp/top-line.webp'
import bottomLine from '../assets/images/webp/bottom-line.webp'
import roadMapLine from '../assets/images/webp/roadmap-line1.webp'
import roadMapLineTwo from '../assets/images/webp/roadmap-line2.webp'
import roadMapLineThree from '../assets/images/webp/roadmap-line3.webp'
import roadMapLineFour from '../assets/images/webp/roadmap-line4.webp'
import CommonDescription from './common/CommonDescription'


const RoadmapSection = () => {

    return (
        <div className='lg:min-h-[1024px] bg-[#011120]'>
            <div className='max-w-[1320px] max-xl:px-10 max-xl:py-20 mx-auto w-full lg:min-h-[1024px] relative'>
                <img className='absolute top-[32%] left-[19%] max-xl:hidden' src={roadmapBg} alt="line" />
                <img className='absolute top-[32%] left-[59.5%] max-xl:hidden' src={roadmapBg} alt="line" />
                <img className='absolute top-[48%] left-[17%] max-xl:hidden' src={roadMapLine} alt="roadmapLine" />
                <img className='absolute top-[48%] left-[36.5%] max-xl:hidden' src={roadMapLineTwo} alt="roadmapLine" />
                <img className='absolute top-[48%] left-[56%] max-xl:hidden' src={roadMapLineThree} alt="roadmapLine" />
                <img className='absolute top-[48%] left-[75%] max-xl:hidden' src={roadMapLineFour} alt="RoadmapLine" />
                {/* Roadmap Item  1 */}
                <div className='max-xl:flex roadmap-item max-xl:flex-row-reverse items-center max-xl:w-max max-xl:gap-10 max-md:max-w-[769px] max-md:w-full'>
                    <div className='absolute max-xl:relative max-md:w-full xl:top-[20%] xl:left-[2%]'>
                        <ul>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Ut eu ac sed duis nec amet."} />
                            </li>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Sed elementum a tortor eros."} />
                            </li>
                        </ul>
                    </div>
                    <div className='absolute max-xl:relative  xl:!top-[30%]'>
                        <div className='relative w-max'>
                            <img className='relative z-20 max-md:max-w-[120px]' src={roadmapBox} alt="Pentagon" />
                            <p className='text-[40px] z-20 font-Righteous max-xl:text-4xl max-lg:text-3xl max-md:text-xl leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                2021
                                <span className='block'>December</span>
                            </p>
                            <img className='absolute z-10 max-xl:rotate-180 max-xl:!top-[98%] -top-[12%] left-1/2' src={topLine} alt="topLine" />
                        </div>
                    </div>
                </div>
                {/* Roadmap Item  2 */}
                <div className='max-xl:flex roadmap-item max-xl:flex-row-reverse items-center max-xl:w-max max-xl:gap-10 max-md:max-w-[769px] max-md:w-full'>
                    <div className='absolute max-xl:relative xl:bottom-[13%] xl:left-[20%] max-xl:ml-auto xl:max-w-[367px]'>
                        <ul>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Sagittis tristique molestie eu pharetra."} />
                            </li>
                            <li className='list-disc  text-white '>
                                <CommonDescription commonDescription={"Nibh convallis ornare fringilla diam proin volutpat aliquet nunc."} />
                            </li>
                        </ul>
                    </div>
                    <div className='absolute max-xl:relative xl:top-[48%] xl:left-[20%] max-xl:mx-auto'>
                        <div className='relative w-max'>
                            <img className='relative z-20 max-md:max-w-[120px]' src={roadmapBox} alt="Pentagon" />
                            <p className='text-[40px] z-20 font-Righteous max-xl:text-4xl max-lg:text-3xl max-md:text-xl leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                2022
                                <span className='block'>Feburary</span>
                            </p>
                            <img className='absolute z-10 rotate-180 -bottom-[12%] left-1/2' src={topLine} alt="topLine" />
                        </div>
                    </div>
                </div>
                {/* RoadMap Item 3 */}
                <div className='max-xl:flex roadmap-item max-xl:flex-row-reverse items-center max-xl:w-max max-xl:gap-10 max-md:max-w-[769px] max-md:w-full'>
                    <div className='absolute max-xl:relative  xl:top-[20%] xl:left-[40%] max-w-[367px]'>
                        <ul>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Adipiscing velit turpis pretium, tellus."} />
                            </li>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Ornare urna arcu, dolor vestibulum."} />
                            </li>
                        </ul>
                    </div>
                    <div className='absolute max-xl:relative  xl:top-[30%] xl:left-[40%]'>
                        <div className='relative w-max'>
                            <img className='relative z-20 max-md:max-w-[120px]' src={roadmapBox} alt="Pentagon" />
                            <p className='text-[40px] z-20 font-Righteous max-xl:text-4xl max-lg:text-3xl max-md:text-xl leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                2022
                                <span className='block'>Feburary</span>
                            </p>
                            <img className='absolute z-10 -top-[12%] left-1/2 max-xl:hidden' src={topLine} alt="topLine" />
                            <img className='absolute z-10 -bottom-[12%] left-1/2' src={bottomLine} alt="topLine" />
                        </div>
                    </div>
                </div>
                {/* RoadMap Item 4 */}
                <div className='max-xl:flex roadmap-item max-xl:flex-row-reverse items-center max-xl:w-max max-xl:gap-10 max-md:max-w-[769px] max-md:w-full'>
                    <div className='absolute max-xl:relative  xl:bottom-[13%] xl:left-[60%] '>
                        <ul>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Eget imperdiet mauris interdum ut egestas lacinia lacus."} />
                            </li>
                            <li className='list-disc  text-white xl:max-w-[367px]'>
                                <CommonDescription commonDescription={"Non ipsum, cursus consectetur fringilla aliquam."} />
                            </li>
                        </ul>
                    </div>
                    <div className='absolute max-xl:relative  xl:top-[48%] max-xl:mx-auto xl:left-[60%]'>
                        <div className='relative w-max'>
                            <img className='relative z-20 max-md:max-w-[120px]' src={roadmapBox} alt="Pentagon" />
                            <p className='text-[40px] z-20 font-Righteous max-xl:text-4xl max-lg:text-3xl max-md:text-xl leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                2022
                                <span className='block'>Feburary</span>
                            </p>
                            <img className='absolute z-10 rotate-180 -bottom-[12%] left-1/2' src={topLine} alt="topLine" />
                        </div>
                    </div>
                </div>
                {/* Roadmap Item 5 */}
                <div className='max-xl:flex roadmap-item max-xl:flex-row-reverse items-center max-xl:w-max max-xl:gap-10 max-md:max-w-[769px] max-md:w-full'>
                    <div className='absolute max-xl:relative  xl:top-[20%] xl:left-[80%] '>
                        <ul>
                            <li className='list-disc  text-white'>
                                <CommonDescription commonDescription={"Elementum elementum sit mauris amet non."} />

                            </li>
                        </ul>
                    </div>
                    <div className='absolute max-xl:relative  xl:top-[30%] max-xl:mx-auto xl:left-[80%]'>
                        <div className='relative w-max'>
                            <img className='relative z-20 max-md:max-w-[120px]' src={roadmapBox} alt="Pentagon" />
                            <p className='text-[40px] z-20 font-Righteous max-xl:text-4xl max-lg:text-3xl max-md:text-xl leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                2022
                                <span className='block'>Feburary</span>
                            </p>
                            <img className='absolute z-10 -top-[12%] left-1/2' src={topLine} alt="topLine" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection