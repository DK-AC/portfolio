import React from 'react'
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.description}>
                    <span>Hi there</span>
                    <h1>I am Denis Katsai</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    photo
                </div>
            </div>
        </div>
    )
}

