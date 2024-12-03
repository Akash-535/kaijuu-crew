import React, { useEffect, useState } from 'react'
import backToTop from '../../assets/images/webp/back-to-top.webp'
const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 100)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)

    return (
        <div>
            {scrollTop && (
                <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] animate-bounce z-40'><img className='size-16 max-md:size-8' src={backToTop} alt="img" /></button>)
            }
        </div>
    )
}

export default BackToTop
