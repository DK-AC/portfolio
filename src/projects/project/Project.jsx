import React from 'react'
import style from './Project.module.css'

export const Project = ({title, description}) => {
    return (
        <div className={style.project}>
            <div className={style.projectImage}>
                <div className={style.link}>
                    <button >Watch </button>
                </div>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>

    )
}

