import React from 'react'
import styleProject from './Project.module.scss'

export const Project = ({title, description, style}) => {
    return (
        <div className={styleProject.project}>
            <div className={styleProject.image} style={style}>
                <a href="/" className={styleProject.viewBtn}>Watch</a>
            </div>
            <div className={styleProject.info}>
                <h3 className={styleProject.title}>{title}</h3>
                <span className={styleProject.description}>{description}</span>
            </div>

        </div>

    )
}

