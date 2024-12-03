import React, { useState, useEffect } from 'react'
import { HERO_KEYFRAME_DATA, NAVBAR_ITEM } from './common/Helper';
import CommonDescription from './common/CommonDescription';
import UsaFlag from '../assets/images/svg/usa-flag.svg';
import indFlag from '../assets/images/webp/india-logo.webp'
import CommonButton from './common/CommonButton';
import { DiscordIcon } from './common/Icons';
import HeroImg from '../assets/images/webp/hero-img.webp'
import Preloader from './common/Preloader';

const Hero = () => {
    const [showSlide, setShowSlide] = useState(false);
    const toggleSidebar = () => setShowSlide(!showSlide);
    const closeNavbar = () => {
        setShowSlide(false);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (showSlide && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [showSlide]);

    const [language, setLanguage] = useState('ENG');
    const languagehandler = (e) => {
        setLanguage(e.target.value);
    };
    const logo = language === 'ENG' ? UsaFlag : indFlag;
    return (
        <>
            <Preloader />
            <div className='bg-hero-bg overflow-hidden mx-auto bg-no-repeat bg-cover bg-center'>
                {/* Navbar */}
                <div className='bg-[#141313] text-white pt-9 pb-6 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto'>
                    <div className='container flex justify-between items-center'>
                        <div className='relative z-20'>
                            <a href="#" className='text-[#FF002A] text-4xl font-godzilla font-normal'>Kaijuu<span className='text-white'>Crew</span></a>
                        </div>
                        <div className={`flex gap-10 max-lg:flex-col max-lg:justify-center max-lg:items-center ${showSlide ? ' max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:bg-opacity-80 max-lg:transition-opacity duration-500 ease-linear blur-[80%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                            {NAVBAR_ITEM.map((obj, i) => (
                                <div key={i}>
                                    <ul>
                                        <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-[#FF002A] pb-0.5'>
                                            <a onClick={closeNavbar} href={obj.link} className=' text-[22px] max-lg:text-3xl font-normal'>{obj.item}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            <div className='flex items-center gap-2'>
                                <img className='max-w-[31px]' src={logo} alt="flag" />
                                <select className='bg-transparent select-none cursor-pointer !outline-none text-[22px] max-lg:text-3xl font-normal' value={language} onChange={languagehandler} >
                                    <option value="ENG" className='select-none text-black cursor-pointer !outline-none text-[22px] max-lg:text-3xl font-normal'>ENG</option>
                                    <option value="HINDI" className='select-none text-black cursor-pointer !outline-none text-[22px] max-lg:text-3xl font-normal'>HINDI</option>
                                </select></div>
                        </div>
                        <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                            <span className={`${showSlide ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-6 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                            <span className={`${showSlide ? 'w-8 h-1 bg-white translate-x-10 opacity-0 duration-700 ease-linear' : 'w-8 h-1 bg-white duration-700 ease-linear rounded'}`}></span>
                            <span className={`${showSlide ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-10 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                        </div>
                    </div>
                </div>
                {/* Hero Section */}
                <div className='container min-[1921px]:max-w-[1920px] mx-auto'>
                    <div className='flex max-lg:flex-col'>
                        <div className='pt-14 pb-8 w-5/12 max-lg:w-full max-lg:pb-2'>
                            <h1 className='text-[#FF002A] leading-[86%] text-[145px] max-xl:text-9xl max-lg:text-7xl max-md:text-6xl font-godzilla'>Kaijuu
                                <span className='text-white lg:block'>Crew</span></h1>
                            <div className='max-w-[329px] max-lg:max-w-xl'>
                                <CommonDescription commonDescription="The ocean surges with spray and foam,
                            As Kaijuu rise from depth to roam.
                            Thirty-three hundred, and thirty-three more,
                                Decked in garbs from days of yore.
                            We scour the earth and sea and air,
                            Our mission so grave few would dare.
                            In search of untold wealth to hoard?
                            Nay, but 'cause your Apes are Bored.
                                " /></div>
                            <div className='pt-4'>
                                <p className='font-bold text-5xl text-white'>10:20:15:10</p>
                                <p className='opacity-60 text-white text-lg font-normal pt-2'>Days left</p>
                            </div>
                            <div className='flex gap-3 pt-4 max-lg:flex-col'>
                                <button className='bg-[#FF002A] px-9 py-3 font-bold text-lg rounded-md text-white leading-[150%] flex items-center gap-4 hover:scale-105 duration-300 ease-linear max-w-[196.55px]'><DiscordIcon />join discord</button>
                                <CommonButton commonButton="CONNECT WALLET" />
                            </div>
                        </div>
                        <div className='w-7/12 pt-16 max-lg:w-full max-lg:pt-10 max-md:pt-8 max-sm:pt-5 flex lg:justify-end'>
                            <img className='w-full max-w-[707px] max-lg:max-w-[500px]' src={HeroImg} alt="hero img" />
                        </div>
                    </div>
                </div>
                <div className='flex slide-scroll min-[1921px]:max-w-[1920px] mx-auto'>
                    {HERO_KEYFRAME_DATA.map((obj, i) => (
                        <img src={obj.img} alt='image' className='w-full size-[220px] pointer-events-none max-md:size-[160px]' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero
