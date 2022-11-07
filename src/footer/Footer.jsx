import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.logo}>Denis</h2>
                <ul className={style.socialLinks}>
                    <li><a href={'https://www.linkedin.com/in/denis-katsai-254a0720a/'}
                           className={style.socialIcon}>linkedin</a></li>
                    <li><a href={'https://t.me/Dk_Auto_Chess'}
                           className={style.socialIcon}>telegram</a></li>
                    <li><a href={'https://github.com/DK-AC'}
                           className={style.socialIcon}>github</a></li>

                </ul>
                <span className={style.copyright}>&copy; 2022 Все права защищены.</span>
            </div>
        </div>
    )
}

