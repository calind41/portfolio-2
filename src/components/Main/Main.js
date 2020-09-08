import React, { useState, useEffect } from 'react'
import './Main.css'
import ModalVideo from 'react-modal-video'
import techshop from './techshop.mp4'
import "react-modal-video/scss/modal-video.scss";

import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import p6 from './p6.png'
import p7 from './p7.png'

export default function Main({ mode }) {

    const [isOpen, setIsOpen] = useState(false);

    const showSkills = () => {
        document.querySelector('.tabs .skills').style.opacity = '1';
        document.querySelector('.tabs .projects').style.opacity = '0.6';
        document.querySelector('.projects-wrapper').style.display = 'none';
        document.querySelector('.skills-wrapper').style.display = 'flex';
    }
    const showProjects = () => {
        document.querySelector('.tabs .skills').style.opacity = '0.6';
        document.querySelector('.tabs .projects').style.opacity = '1';
        document.querySelector('.skills-wrapper').style.display = 'none';
        document.querySelector('.projects-wrapper').style.display = 'flex';
    }

    return (
        <div className={mode === 'light' ? 'main' : 'main main-dark'}>
            <div className={mode === 'light' ? 'tabs' : 'tabs tabs-dark'} >
                <div onClick={showSkills} className='skills'>Skills</div>
                <div onClick={showProjects} className='projects'>Projects</div>
            </div>
            <div className='skills-wrapper'>

                <div className={mode === 'light' ? 'skills-top' : 'skills-top skills-dark'}>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>HTML / CSS</li>
                    </ul>
                    <ul>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>C</li>
                        <li>Figma</li>
                    </ul>

                </div>
                <div className={mode === 'light' ? 'skills-bottom' : 'skills-bottom skills-dark'}>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>jQuery</li>
                        <li>Redux</li>
                    </ul>
                    <ul>
                        <li>GIT</li>
                        <li>REST</li>
                        <li>Responsive Design</li>
                        <li>Data Structures</li>
                    </ul>
                </div>
            </div>

            <div className='projects-wrapper'>
                <div className='p1'>
                    {/* sportsbooking app */}
                    <img src={p1} alt='Sports Booking App' />
                    <div className='description'>
                        <h3>Sports Booking App</h3>
                        <div>
                            <p>User authentication</p>
                            <p> Admin and Support dashboards.</p>
                            <p>Implemented with React.js & Node.js</p>
                        </div>
                        <p className='links'>
                            <a
                                href='https://github.com/calind41/booking-sports-app'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='http://www.mysportsbooking.com/'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>
                <div className='p2'>
                    {/* real estate landing page */}
                    <img src={p2} alt='Real Estate LP UI' />
                    <div className='description'>
                        <h3>Real Estate LP UI</h3>
                        <div>
                            <p>Design inspired from homezz.ro site</p>
                            <p>Implemented with React.js</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/real-estate-project-react'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='https://real-estate-lp.netlify.app/'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>
                <div className='p3'>
                    {/* techshop ecommerce website */}
                    <img src={p3} alt='Tech Ecommerce Website' />
                    <div className='description'>
                        <h3>Tech Ecommerce App</h3>
                        <div>
                            <p>User Authentication</p>
                            <p>Payment integration</p>
                            <p>Implemented with React.js and Node.js</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/techshop-ecommerce-app'
                                target='_blank'

                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a onClick={() => setIsOpen(true)}><i class="fas fa-link"></i></a>

                        </p>
                    </div>
                </div>
                <div className='p4'>
                    {/* insurance app components */}
                    <img src={p4} alt='Insurance App UI C.' />
                    <div className='description'>
                        <h3>Insurance App UI Components</h3>
                        <div>
                            <p>Design inspired from Dribbble</p>
                            <p>Implemented with React.js</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/insurance_app_ui_components'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='https://insurance-app-components.netlify.app/'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>
                <div className='p5'>
                    {/* progress dashboard ui */}
                    <img src={p5} alt='Progress Dashboard UI' />
                    <div className='description'>
                        <h3>Progress Dashboard UI</h3>
                        <div>
                            <p>Design inspired from Dribbble</p>
                            <p>Implemented with HTML/CSS</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/progress-dashboard-ui'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='https://codepen.io/calind41/pen/NWxVQpr'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>
                <div className='p6'>
                    {/* track time ui */}
                    <img src={p6} alt='Track Time UI' />
                    <div className='description'>
                        <h3>Track Time UI</h3>
                        <div>
                            <p>Design inspired from Dribbble</p>
                            <p>Implemented with HTML/CSS</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/track-time-components-ui'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='https://codepen.io/calind41/pen/RwrXBVZ?editors=1100'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>
                <div className='p7'>
                    {/* pair match memory game */}
                    <img src={p7} alt='Pairs Match Memory Game' />
                    <div className='description'>
                        <h3>Pair Match Memory Game</h3>
                        <div>
                            <p>Match pairs of fruits from memory</p>
                            <p>Implemented with HTML/CSS/JS</p>
                        </div>

                        <p className='links'>
                            <a
                                href='https://github.com/calind41/pairs-match-memory-game'
                                target='_blank'
                            >
                                <i class="fab fa-github"></i>
                            </a>
                            <a
                                href='https://pair-match-memory-game.netlify.app/'
                                target='_blank'
                            >
                                <i class="fas fa-link"></i>
                            </a>

                        </p>
                    </div>
                </div>

            </div>
            <div style={{ position: 'absolute' }}>
                <ModalVideo channel='custom' isOpen={isOpen} url={techshop} onClose={() => setIsOpen(false)} />
            </div>
        </div>
    )
}
