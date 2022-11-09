import React, {useEffect, useState} from 'react'
import style from './Header.module.scss'
import {BurgerNav} from './burgerNav'
import {Nav} from './nav'

export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    return (
        <div className={style.header}>
            {width < '720' ? <BurgerNav/> : <Nav/>}
        </div>
    )
}

