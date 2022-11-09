import React, {useEffect, useState} from 'react'
import style from './Header.module.scss'
import {Nav} from './nav'
import {BurgerNav} from './burgerNav'

export const Header = () => {

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })


    return (
        <div className={style.header}>
            {isMobile ? <BurgerNav/> : <Nav/>}
        </div>
    )
}

