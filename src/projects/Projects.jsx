import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Projects.module.css'
import {Project} from './project'

export const Projects = () => {

    const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis consequatur culpa, cumque deserunt dolore doloribus eligendi eos est fuga molestiae natus non placeat quae quas, quisquam similique velit.`

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={loremDescription}/>
                    <Project title={'Todolist'}
                             description={loremDescription}/>
                    <Project title={'Movie'}
                             description={loremDescription}/>
                    <Project title={'Movie'}
                             description={loremDescription}/>
                </div>
            </div>
        </div>
    )
}

