import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
// Third packages
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import QueueAnim from 'rc-queue-anim';

// Img
import project1 from '../img/smart-tribune.jpg';
import project2 from '../img/project-incoming.jpg';

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 5s ${fadeInAnimations}
`;

class Works extends Component {

    render() {
        return (
            <div className="works">
                <FadeInDiv>
                    <Header />
                </FadeInDiv>

                <QueueAnim type="bottom" delay={2000} duration={4000}>

                    <div key="1" className="works__container">
                        <h2 className="works__title">Mes travaux</h2>
                        <div className="works__lists">
                            <div className="works__project">
                                <a href="https://www.smart-tribune.com/fr/">
                                    <img className="works__mission" src={project1} alt="" />
                                </a>
                                <a className="works__project-title" href="https://www.smart-tribune.com/fr/">Smart Tribune</a>
                            </div>
                            <div className="works__project">
                                <img className="works__mission" src={project2} alt="" />
                                <a className="works__project-title">Todos Memory (en dev)</a>
                            </div>
                            <div className="works__project">
                                <img className="works__mission" src={project2} alt="" />
                                <a className="works__project-title">Chat project (en dev)</a>
                            </div>
                        </div>

                        <Link to="/home" className="works__to-home"> > Retour à l'accueil</Link>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default Works;