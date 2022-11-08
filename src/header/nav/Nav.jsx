import React from 'react'
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.item} href="/">main</a>
            <a className={style.item} href="/">skills</a>
            <a className={style.item} href="/">projects</a>
            <a className={style.item} href="/">contacts</a>
        </div>
    )
}

