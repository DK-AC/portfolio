import React from 'react'
import styleContainer from '../common/styles/Container.module.scss'
import style from './Projects.module.scss'
import {Project} from './project'
import {Title} from '../common/components/title'
import cards from './../assets/image/Cards.png'
import socialNetwork from './../assets/image/SocialNetwork.png'
import movies from './../assets/image/Movies.png'
import todolist from './../assets/image/Todolist.png'

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
    const TodolistImage = {
        backgroundImage: `url(${todolist})`,
    }

    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title name={'projects'}/>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             href={'https://github.com/DK-AC/TodoList'}
                             description={`A web service for managing tasks. Tasks can be placed into projects, sorted by filter, assigned labels, edited.`}
                             style={TodolistImage}
                    />
                    <Project title={'Social Network'}
                             description={`An online platform that is used for communication, dating, creating social relationships between people.`}
                             style={socialNetworkImage}
                             href={'https://github.com/DK-AC/social-network-ts'}
                    />
                    <Project title={'Movies'}
                             description={`Movie and TV Series Search Site`}
                             style={MoviesImage}
                             href={'https://github.com/DK-AC/movies'}
                    />
                    <Project title={'Cards'}
                             href={'https://github.com/DK-AC/Cards'}
                             description={`Cards is a learning application for memorizing information using flashcards.`}
                             style={cardsImage}
                    />


                </div>
            </div>
        </div>
    )
}

