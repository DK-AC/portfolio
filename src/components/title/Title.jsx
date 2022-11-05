import React from 'react'
import style from './Title.module.css'

export const Title = ({name}) => {
    return (
        <div className={style.title}>
            <h2>{name}</h2>
        </div>
    )
}

