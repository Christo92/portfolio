import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
// Third packages
import QueueAnim from 'rc-queue-anim';

const About = () => {

    return (
        <div className="about">

            <QueueAnim type="top" delay={1000} duration={2000}>
                <Header key="1" />
            </QueueAnim>

            <QueueAnim type="scale" delay={1000} duration={2000}>

                <div key="1" className="about__container">
                    <div className="about__presentation">
                        <h2 className="about__title">À propos</h2>
                        <p className="about__text">
                            Je suis un développeur javascript résidant proche de Paris. <br />
                            En commençant à apprendre le javascript, je me suis tout d’abord principalement intéressé au Front End. <br />
                            Toutefois, par la suite je me suis intéressé de plus en plus sur le Back End. <br />
                        </p>

                        <p className="about__text">Mon objectif est de devenir un dévéloppeur FullStack JS. Je recherche un CDI. </p>
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
            </QueueAnim>
        </div>
    );
}

export default About;