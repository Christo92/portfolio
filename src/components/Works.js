import React, { Component } from 'react';
// Components
import Header from './Header';
// Third packages
import QueueAnim from 'rc-queue-anim';

// Img
import project1 from '../img/smart-tribune.jpg';
import project2 from '../img/project-incoming.jpg';

class Works extends Component {

    render() {
        return (
            <div className="works">
                <QueueAnim type="top" delay={1000} duration={2000}>
                    <Header key="1" />
                </QueueAnim>

                <QueueAnim type="bottom" delay={1000} duration={2000}>

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
                                <p className="works__project-title">Todos Memory</p>
                            </div>
                            <div className="works__project">
                                <img className="works__mission" src={project2} alt="" />
                                <p className="works__project-title">Chat project</p>
                            </div>
                            <div className="works__project">
                                <img className="works__mission" src={project2} alt="" />
                                <p className="works__project-title">StoryTelling</p>
                            </div>
                        </div>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default Works;