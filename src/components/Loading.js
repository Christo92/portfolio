import React, { useState, useEffect } from "react";
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

function Loading() {

    // Hooks state
    const [done, setDone] = useState(false);
    const [loading] = useState(true);
    const [animation, setAnimation] = useState(false);

    // Animation Loading
    useEffect(() => {
        setTimeout(() => {
            setDone(true)
        }, 3000);
    }, []);

    // Animation Writing
    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 7500);
    }, []);

    // Redirect to home page
    function goHome() {
        if (animation === true) {
            return (
                <Redirect to="/home" />
            )
        }
    }

    return (
        <div className="loading">
            {!done ? (
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
            {goHome()}
        </div>
    )
}

export default Loading;