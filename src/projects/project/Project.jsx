import React from 'react'
import styleProject from './Project.module.scss'

export const Project = ({title, description, style, href, projectLink}) => {
    return (
        <div className={styleProject.project}>
            <div className={styleProject.image} style={style}>
                <a href={href} className={styleProject.viewBtn}>view</a>
            </div>
            <div className={styleProject.info}>
                <h3 className={styleProject.title}>{title}</h3>
                <span className={styleProject.description}>{description}
                    <div><a href={projectLink}> code</a></div></span>
            </div>

        </div>

    )
}

