import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import {Link} from 'react-scroll'
import style from './SideDrawer.module.scss'

export const SideDrawer = ({open, onClose}) => {
    return (
        <Drawer
            anchor="top"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav" className={style.list}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={1000}
                    onClick={() => onClose(false)}

                >
                    main
                </Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={1000}
                    onClick={() => onClose(false)}
                >
                    skills
                </Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={1000}
                    onClick={() => onClose(false)}
                >
                    projects
                </Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={1000}
                    onClick={() => onClose(false)}
                >
                    contacts
                </Link>
            </List>
        </Drawer>
    )
}



