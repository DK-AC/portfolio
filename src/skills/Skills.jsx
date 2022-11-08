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
import bootstrapIcon from './../assets/icons/bootstrap-svgrepo-com.svg'
import reduxIcon from './../assets/icons/redux-svgrepo-com.svg'
import jestIcon from './../assets/icons/jest-svgrepo-com.svg'
import axiosIcon from './../assets/icons/axios-seeklogo.com.svg'

export const Skills = () => {

    const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis consequatur culpa, cumque deserunt dolore doloribus eligendi eos est fuga molestiae natus non placeat quae quas, quisquam similique velit.`

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title name={'skills'}/>
                <div className={style.skills}>
                    <Skill title={'react'}
                           description={loremDescription}
                           icon={reactIcon}
                    />
                    <Skill title={'redux thunk / toolkit'}
                           description={loremDescription}
                           icon={reduxIcon}
                    />
                    <Skill title={'javascript / ts'}
                           description={loremDescription}
                           icon={typescriptIcon}
                    />
                    <Skill title={'axios / rest api'}
                           description={loremDescription}
                           icon={axiosIcon}
                    />
                    <Skill title={'material / ant'}
                           description={loremDescription}
                           icon={materialIcon}
                    />
                    <Skill title={'react hooks'}
                           description={loremDescription}/>
                    <Skill title={'html & css / scss'}
                           description={loremDescription}
                           icon={scssIcon}
                    />
                    <Skill title={'bem / bootstrap'}
                           description={loremDescription}
                           icon={bootstrapIcon}
                    />
                    <Skill title={'tdd / jest / storybook'}
                           description={loremDescription}
                           icon={jestIcon}
                    />
                    <Skill title={'git / github'}
                           description={loremDescription}
                           icon={githubIcon}
                    />
                </div>
            </div>

        </div>)
}

