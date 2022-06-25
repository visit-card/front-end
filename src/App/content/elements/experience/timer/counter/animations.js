import { keyframes } from 'styled-components';

const DisappearAnimation = keyframes`
    0% {
        transform: rotateX(0deg);
    }
    0%, 99% {
        opacity: 1;
    }
    100% {
        transform: rotateX(-90deg);
        opacity: 0;
    }
`

const AppearAnimation = keyframes`
    0%, 50% {
        transform: rotateX(90deg);
        opacity: 0;
    }
    51% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: rotateX(0deg);
    }
`

export {
    DisappearAnimation,
    AppearAnimation
}