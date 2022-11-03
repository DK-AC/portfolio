import React from 'react'
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from './skill'

export const Skills = () => {

    const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis consequatur culpa, cumque deserunt dolore doloribus eligendi eos est fuga molestiae natus non placeat quae quas, quisquam similique velit.`

    return (<div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
                <Skill title={'HTML'}
                       description={loremDescription}/>
                <Skill title={'CSS'}
                       description={loremDescription}/>
                <Skill title={'React'}
                       description={loremDescription}/>
                {/*<Skill title={'Redux'}*/}
                {/*       description={loremDescription}/>*/}
                {/*<Skill title={'Axios'}*/}
                {/*       description={loremDescription}/>*/}
                {/*<Skill title={'Material UI'}*/}
                {/*       description={loremDescription}/>*/}
            </div>
        </div>

    </div>)
}

