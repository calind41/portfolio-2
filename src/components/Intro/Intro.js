import React, { useState, useEffect } from 'react'
import './Intro.css'
import profileImg from '../../profileP.jpeg'


export default function Intro({ passMode, mode }) {

    const changeMode = (mode) => {
        passMode(mode);
    }


    return (
        <div className={mode === 'light' ? 'intro' : 'intro intro-dark'}>
            <div className='portfolio-heading'>PORTFOLIO</div>
            <div className={mode === 'light' ? 'rectangle-wrapper' : 'rectangle-wrapper rectangle-wrapper-dark'}>
                <div className='corner-tl'></div>
                <div className='corner-tr'></div>
                <div className='corner-bl'></div>
                <div className='corner-br'></div>
                <div className='left animate__animated animate__bounceInLeft'>
                    <img src={profileImg} />
                    <div>Personalize Theme</div>
                    <div className='theme-picker'>
                        <div onClick={() => changeMode('light')} className='light'></div>
                        <div onClick={() => changeMode('dark')} className={mode === 'light' ? 'dark' : 'dark dark-picked'}></div>
                    </div>
                </div>
                <div className='right animate__animated animate__bounceInRight'>
                    <div>Hi, I'm Calin Dodon</div>
                    <div>Front End Developer</div>
                    <div className='links'>
                        <div className='linkedin'>
                            <a href='https://www.linkedin.com/in/c%C4%83lin-dodon-90217a107/' target='_blank'><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div className='cv'>
                            <a href='https://pdfhost.io/v/0THsIkCgc_Front_End_Developer.pdf' target='_blank'>CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
