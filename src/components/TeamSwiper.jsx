import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import swiperImg from '../assets/images/webp/swiper-img1.webp'
import swiperImgTwo from '../assets/images/webp/swiper-img-2.webp'
import CommonHeading from './common/CommonHeading';
import { SwiperNextArrow, SwiperPrevArrow } from './common/Icons';
import { TEAM_SWIPER_DATA } from './common/Helper';

const TeamSwiper = () => {
    return (
        <div id='team' className='bg-[#011120] pt-12 pb-28 max-xl:pb-24 max-lg:pb-20 max-md:pb-16 max-sm:pb-12 -mt-1'>
            <div className='container relative'>
                <div className='text-center pb-14'>
                    <CommonHeading commonHeading="TEAM" />
                </div>
                <button className="custom-prev-btn absolute left-[-7%] top-[52%] max-xl:hidden max-2xl:hidden"> <SwiperPrevArrow /> </button>
                <button className="custom-next-btn absolute right-[-7%] top-[52%] max-xl:hidden max-2xl:hidden"><SwiperNextArrow /> </button>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.custom-prev-btn',
                            nextEl: '.custom-next-btn',
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },

                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: true
                            },

                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}>
                        {TEAM_SWIPER_DATA.map((val, i) => (
                            <SwiperSlide key={i} className='text-center'>
                                <img src={val.teamImg} alt="team image" />
                                <p className='font-Righteous text-4xl font-normal text-white max-md:text-2xl max-sm:text-lg'>{val.teamText}</p>
                                <p className='font-Righteous text-lg pt-2 font-normal text-white max-md:text-base max-sm:text-sm'>{val.teamTextTwo}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TeamSwiper
