import React from 'react'
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.item} href={'#main'}>main</a>
            <a className={style.item} href={'#skills'}>skills</a>
            <a className={style.item} href={'#projects'}>projects</a>
            <a className={style.item} href={'#contact'}>contacts</a>
        </div>
    )
}

