import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span className={style.text}>Denis Katsai</span>
                <div className={style.footerIcon}>
                    <div className={style.item}>1</div>
                    <div className={style.item}>2</div>
                    <div className={style.item}>3</div>
                    <div className={style.item}>4</div>
                    <div className={style.item}>5</div>
                    <div className={style.item}>6</div>
                </div>
                <span className={style.text}>&copy; 2022 Все права защищены.</span>
            </div>
        </div>
    )
}

