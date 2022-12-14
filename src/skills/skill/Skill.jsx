import React from 'react'
import style from './Skill.module.scss'

export const Skill = ({title, description, icon}) => {
    return (
        <div className={style.skill}>
            <div className={style.square}>
                <img className={style.icon} src={icon} alt="skill logo"/>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{title}</h3>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    )
}

