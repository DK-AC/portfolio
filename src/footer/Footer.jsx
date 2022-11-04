import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.text}>Denis Katsai</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>1</div>
                    <div className={style.socialIcon}>2</div>
                    <div className={style.socialIcon}>3</div>
                    <div className={style.socialIcon}>4</div>
                    <div className={style.socialIcon}>5</div>
                    <div className={style.socialIcon}>6</div>
                </div>
                <span className={style.text}>&copy; 2022 Все права защищены.</span>
            </div>
        </div>
    )
}

