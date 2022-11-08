import React from 'react'
import styleContainer from './../common/styles/Container.module.css'
import style from './Projects.module.scss'
import {Project} from './project'
import {Title} from '../common/components/title'
import cards from './../assets/image/Cards.png'
import socialNetwork from './../assets/image/SocialNetwork.png'
import movies from './../assets/image/Movies.png'

export const Projects = () => {

    const cardsImage = {
        backgroundImage: `url(${cards})`,
    }
    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`,
    }
    const MoviesImage = {
        backgroundImage: `url(${movies})`,
    }

    const loremDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur blanditiis consequatur culpa, cumque deserunt dolore doloribus eligendi eos est fuga molestiae natus non placeat quae quas, quisquam similique velit.`

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title name={'projects'}/>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={loremDescription}
                             style={socialNetworkImage}
                    />
                    <Project title={'Movies'}
                             description={loremDescription}
                             style={MoviesImage}
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

