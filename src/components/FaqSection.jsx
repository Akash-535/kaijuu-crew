import React, { useEffect, useRef, useState } from 'react'
import CommonHeading from './common/CommonHeading'
import { ACCORDION_DATA } from './common/Helper';
import { BoatIcon, FooterDiscordIcon, InstaIcon, TwitterIcon } from './common/Icons';

const FaqSection = () => {
    const year = new Date().getFullYear()
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, ACCORDION_DATA.length);
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const getHeight = (index) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index].scrollHeight + 'px';
        }
        return '0px';
    };
    return (
        <>
            <div id='faq' className='bg-faq-bg bg-cover bg-no-repeat bg-center pt-[106px] max-xl:pt-20 max-lg:pt-16 pb-16 max-md:py-12 max-sm:py-10 -mt-1'>
                <div className='container min-[1921px]:max-w-[1920px]'>
                    <div className='flex items-end text-center justify-center'>
                        <CommonHeading commonHeading='FAQ' /><p className='text-[40px] font-normal font-godzilla text-white max-md:text-3xl max-sm:text-2xl'>s</p>
                    </div>
                    <div className="pt-1.5">
                        {ACCORDION_DATA.map((item, index) => (
                            <div key={index} className="overflow-hidden flex mx-auto max-w-[832px] mt-2.5 sm:mt-4 justify-center relative duration-300 ease-linear rounded-[10px]">
                                <div className='w-full max-w-[832px] bg-gradient-to-r from-[#FFFFFF40] to-[#FFFFFF17] p-[1px] rounded-[10px]'>
                                    <div className="accordion w-full">
                                        <div
                                            role="button"
                                            className={`bg-gradient-to-r from-[#37546F] to-[#19425C] backdrop-filter backdrop-blur-[35px] rounded-[10px] relative z-[1] flex items-center justify-between gap-1.5 cursor-pointer sm:px-6 pt-3 pb-2 px-3 sm:pt-5 ${openIndex === index ? "sm:pb-4 rounded-b-none" : "sm:pb-5"}`}
                                            onClick={() => handleToggle(index)}
                                            aria-expanded={openIndex === index}
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    handleToggle(index);
                                                }
                                            }}
                                        >
                                            <h3 className="font-bold font-oswald text-[22px] max-md:text-lg max-sm:text-sm text-white">
                                                <span className='font-oswald font-normal'>{index + 1} . </span>{item.title}
                                            </h3>
                                            <div className={`${openIndex === index ? 'rotate-180' : ''} duration-300 ease-linear `}>
                                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.63729 0L5.5 4.82292L1.36271 0L0 1.58854L5.5 8L11 1.58854L9.63729 0Z" fill="white" />
                                                </svg>

                                            </div>
                                        </div>
                                        <div
                                            ref={(el) => {
                                                contentRefs.current[index] = el;
                                            }}
                                            className={`accordion-content max-h-0 overflow-hidden duration-300 ease-linear ${openIndex === index ? 'max-h-96 rounded-b-[10px]' : 'max-h-0'}`}
                                            style={{
                                                maxHeight: openIndex === index ? getHeight(index) : '0px',
                                            }}
                                        >
                                            <div className="bg-gradient-to-r from-[#37546F] to-[#19425C] backdrop-filter backdrop-blur-[35px] flex flex-col px-6 pb-4">
                                                <span className=' flex w-full'></span>
                                                <p className="text-white sm:pt-3 pt-2 text-[22px] max-md:text-lg max-sm:text-sm font-normal font-oswald">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Footer links */}
                    <div className='text-center pt-48 max-lg:pt-40 max-md:pt-32 max-sm:pt-24 flex items-center justify-center flex-col'>
                        <div>
                            <a href='#' className='font-godzilla font-normal text-4xl text-[#FF002A]'>Kaijuu<span className='text-white'>Crew</span></a>
                        </div>
                        <div className='flex gap-4 py-7 max-lg:py-5 max-md:pt-4 '>
                            <a href="https://twitter.com" target='_blank' className='social-icons'><TwitterIcon /></a>
                            <a href="https://discord.com" target='_blank' className='social-icons'><FooterDiscordIcon /></a>
                            <a href="https://instagram.com" target='_blank' className='social-icons'><InstaIcon /></a>
                            <a href="https://opensea.com" target='_blank' className='social-icons'><BoatIcon /></a>
                        </div>
                        <p className='font-oswald text-[22px] font-normal text-white max-md:text-lg max-sm:text-base'>Copyright © Kaijuu Crew {year}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqSection
