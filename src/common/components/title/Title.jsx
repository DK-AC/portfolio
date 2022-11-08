import React from 'react'
import style from './Title.module.scss'

export const Title = ({name}) => {
    return (
        <div className={style.title}>
            <h2 id={name}>{name}</h2>
        </div>
    )
}

