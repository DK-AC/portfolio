import React from 'react'
import style from './Nav.module.scss'
import {Link} from 'react-scroll'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                offset={1}
                duration={700}
            >
                main
            </Link>
            <Link
                activeClass={style.active}
                to="skills"
                offset={1}
                duration={700}
            >
                skills
            </Link>
            <Link
                activeClass={style.active}
                to="projects"
                offset={1}
                duration={700}
            >
                projects
            </Link>
            <Link
                activeClass={style.active}
                to="contacts"
                offset={1}
                duration={700}
            >
                contacts
            </Link>
        </div>
    )
}

