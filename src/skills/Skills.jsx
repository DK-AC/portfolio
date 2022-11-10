import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill'
import {Title} from '../common/components/title'
import reactIcon from './../assets/icons/react-svgrepo-com.svg'
import typescriptIcon from './../assets/icons/typescript-svgrepo-com.svg'
import materialIcon from './../assets/icons/material-ui-svgrepo-com.svg'
import githubIcon from './../assets/icons/github-svgrepo-com.svg'
import scssIcon from './../assets/icons/scss2-svgrepo-com.svg'
import reduxIcon from './../assets/icons/redux-svgrepo-com.svg'
import jestIcon from './../assets/icons/jest-svgrepo-com.svg'
import axiosIcon from './../assets/icons/axios-seeklogo.com.svg'
import {Fade} from 'react-awesome-reveal'

export const Skills = () => {

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title name={'skills'}/>
                <Fade>
                    <div className={style.skills}>
                        <Skill title={'react'} icon={reactIcon}/>
                        <Skill title={'redux thunk / toolkit'} icon={reduxIcon}/>
                        <Skill title={'javascript / ts'} icon={typescriptIcon}/>
                        <Skill title={'axios / rest api'} icon={axiosIcon}/>
                        <Skill title={'material / ant'} icon={materialIcon}/>
                        <Skill title={'html & css / scss'} icon={scssIcon}/>
                        <Skill title={'tdd / jest / storybook'} icon={jestIcon}/>
                        <Skill title={'git / github'} icon={githubIcon}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

