import React from 'react'
import style from './Project.module.css'

export const Project = ({title, description}) => {
    return (
        <div className={style.project}>
            <div className={style.projectImage}>
                <a href="/" className={style.viewBtn}>Watch</a>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>

    )
}

