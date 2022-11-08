import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import avatar from './../assets/image/avatar.jpg'
import {Particle} from '../common/components/particle'
import {Fade} from 'react-awesome-reveal'


export const Main = () => {
    return (
        <div
            className={`${style.heroBannerContent} ${style.vAlignCenter} ${style.dFlex}`}
            id={'main'}
        >

            <div className={styleContainer.container}>
                <Particle/>
                <div className={style.dTable}>
                    <div
                        className={`${style.heroBannerLeft} ${style.dTableCell} ${style.vAlignMiddle}`}>
                        <Fade>
                            <div className={style.intro}>
                                <span>Hi there</span>
                                <h1>I am <span>Denis Katsai</span></h1>
                                <p>A Frontend Developer</p>
                            </div>
                        </Fade>

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

