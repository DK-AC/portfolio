import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Projects.module.css'
import {Project} from './project'
import {Title} from '../components/title'
import cards from './../assets/image/Cards.png'
import socialNetwork from './../assets/image/SocialNetwork.png'

export const Projects = () => {

    const cardsImage = {
        backgroundImage: `url(${cards})`,
    }
    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`,
    }

    const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis consequatur culpa, cumque deserunt dolore doloribus eligendi eos est fuga molestiae natus non placeat quae quas, quisquam similique velit.`

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title name={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={loremDescription}
                             style={socialNetworkImage}
                    />
                    <Project title={'Todolist'}
                             description={loremDescription}
                             style={cardsImage}
                    />
                    <Project title={'Cards'}
                             description={loremDescription}
                             style={cardsImage}
                    />
                </div>
            </div>
        </div>
    )
}

