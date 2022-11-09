import React, {useCallback} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import style from './Particle.module.scss'


export const Particle = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [])

    return (
        <Particles
            className={style.tsParticles}
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    zIndex: 0,
                    enable: false,
                },
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.7,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#fff',
                    },
                    links: {
                        color: '#fff',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: {min: 1, max: 5},
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

