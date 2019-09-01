import React, { Component } from "react";
// Remote packages
import { Redirect } from 'react-router';
import { SwishSpinner } from 'react-spinners-kit';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
// Svg
import logoAnimate from '../img/logo-animate.svg'

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 3s ${fadeInAnimations}
`;

class Loading extends Component {

    state = {
        done: false,
        loading: true,
        animation: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                done: !this.state.done
            })
        }, 3000);

        this.handleAnimation();
    }

    handleAnimation = () => {
        setTimeout(() => {
            this.setState({
                animation: !this.state.animation
            })
        }, 7500);
    }

    goHome = () => {
        if (this.state.animation === true) {
            return (
                <Redirect to="/home" />
            )
        }
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="loading">
                {!this.state.done ? (
                    <SwishSpinner
                        size={30}
                        color="#FFFFFF"
                        loading={loading}
                    />
                ) : (
                        <div className="loading__container">
                            <FadeInDiv>
                                <img src={logoAnimate} className="loading__logo" alt="logo-loading" />
                            </FadeInDiv>
                        </div>

                    )}
                {this.goHome()}
            </div>
        )
    }
}

export default Loading;