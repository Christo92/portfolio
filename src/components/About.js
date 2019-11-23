import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from './Header';

import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn } from 'react-animations';

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;
const zoomInAnimations = keyframes`${zoomIn}`;

const FadeInDiv = styled.div`
    animation: 4s ${fadeInAnimations}
`;

const ZoomInDiv = styled.div`
    animation: 3s ${zoomInAnimations}
`;

function About() {

    return (
        <div className="about">

            <FadeInDiv>
                <Header key="1" />
            </FadeInDiv>

            <ZoomInDiv>

                <div key="1" className="about__container">
                    <div className="about__presentation">
                        <h2 className="about__title">À propos</h2>
                        <p className="about__text">
                            Je suis un développeur javascript résidant proche de Paris. <br />
                            En commençant à apprendre le javascript, je me suis tout d’abord principalement intéressé au Front End. <br />
                            Toutefois, par la suite je me suis intéressé de plus en plus sur le Back End et au testing. <br />
                        </p>

                        <p className="about__text">Je recherche un CDI en tant que dévéloppeur Front-End ReactJS.</p>
                    </div>
                    <div className="about__skills">
                        <h2 className="about__skills-title">Compétences</h2>
                        <div className="about__list-skills">
                            <p className="about__list-title">- En Front :</p>
                            <div>
                                <p>React JS</p>
                                <p>Redux</p>
                                <p>SCSS</p>
                                <p>BEM</p>
                                <p>ES6</p>
                                <p>Webpack</p>
                            </div>
                        </div>
                        <div className="about__list-skills">
                            <p className="about__list-title">- En Back :</p>
                            <div>
                                <p>Node JS</p>
                                <p>Mongo</p>
                                <p>Express</p>
                            </div>
                        </div>
                        <div className="about__list-skills">
                            <p className="about__list-title">- En Testing :</p>
                            <div>
                                <p>Jest</p>
                                <p>Enzyme</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__contact">
                        <h2 className="about__contact-title">Contact</h2>
                        <p className="about__contact-sentence">Vous pouvez me contactez via mon email ou mon linkedin !</p>
                        <div className="about__contact-info">
                            <p>christopher.loubassou@gmail.com</p>
                            <a className="about__linkedin" href="https://www.linkedin.com/in/christopherloubassou/" rel="noopener noreferrer" target="_blank">Christopher Loubassou</a>
                        </div>
                    </div>
                    <Link to="/works" className="about__to-works"> > Voir les projets</Link>
                </div>
            </ZoomInDiv>
        </div>
    );
}

export default About;