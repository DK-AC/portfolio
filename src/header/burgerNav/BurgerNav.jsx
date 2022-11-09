import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import {SideDrawer} from './sideDrawer'


export const BurgerNav = () => {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = value => {
        setDrawerOpen(value)
    }

    return (
        <>
            <MenuIcon onClick={() => toggleDrawer(true)}/>
            <SideDrawer open={drawerOpen} onClose={value => toggleDrawer(value)}/>
        </>
    )
}

