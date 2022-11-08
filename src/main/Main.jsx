import React from 'react'
import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import avatar from './../assets/image/avatar.jpg'

export const Main = () => {
    return (
        <div
            className={`${style.heroBannerContent} ${style.vAlignCenter} ${style.dFlex}`}>
            <div className={styleContainer.container}>
                <div className={style.dTable}>
                    <div
                        className={`${style.heroBannerLeft} ${style.dTableCell} ${style.vAlignMiddle}`}>
                        <div className={style.intro}>
                            <span>Hi there</span>
                            <h1>I am <span>Denis Katsai</span>
                            </h1>
                            <p>A Frontend Developer</p>
                        </div>
                    </div>
                    <div
                        className={`${style.heroBannerRight} ${style.dTableCell} ${style.vAlignMiddle}`}>
                        <div className={style.heroRight}>
                            <img src={avatar} alt="avatar"/>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

