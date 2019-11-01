import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
// Third packages
import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn } from 'react-animations';

// Img
import project1 from '../img/smart-tribune.jpg';
import project2 from '../img/crud-mern.jpg';
import project3 from '../img/project-incoming.jpg';

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;
const zoomInAnimations = keyframes`${zoomIn}`;

const FadeInDiv = styled.div`
    animation: 4s ${fadeInAnimations}
`;

const ZoomInDiv = styled.div`
    animation: 3s ${zoomInAnimations}
`;

function Works() {

    return (
        <div className="works">
            <FadeInDiv type="top" delay={1000} duration={2000}>
                <Header key="1" />
            </FadeInDiv>

            <ZoomInDiv type="bottom" delay={1000} duration={2000}>

                <div key="1" className="works__container">
                    <h2 className="works__title">Mes travaux</h2>
                    <div className="works__lists">
                        <div className="works__project">
                            <a href="https://www.smart-tribune.com/fr/">
                                <img className="works__mission" src={project1} alt="" />
                            </a>
                            <a className="works__project-title" href="https://www.smart-tribune.com/fr/" target="_blank" rel="noopener noreferrer" >Smart Tribune</a>
                        </div>
                        <div className="works__project">
                            <img className="works__mission" src={project2} alt="" />
                            <a className="works__project-title" href="https://crud-mern-project.herokuapp.com" target="_blank" rel="noopener noreferrer" >Crud-Mern</a>
                        </div>
                        <div className="works__project">
                            <img className="works__mission" src={project3} alt="" />
                            <p className="works__project-title">Reused Components</p>
                        </div>
                        <div className="works__project">
                            <img className="works__mission" src={project3} alt="" />
                            <p className="works__project-title">Awworld project</p>
                        </div>
                    </div>
                    <Link to="/home" className="works__to-home"> > Retour à l'accueil</Link>
                </div>
            </ZoomInDiv>
        </div>
    );

}

export default Works;