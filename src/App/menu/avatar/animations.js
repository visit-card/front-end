import { keyframes } from 'styled-components';

const DisappearAnimation = keyframes`
    from {
        transform: rotateY(0deg);
        opacity: 1;
    } to {
        transform: rotateY(90deg);
        opacity: 0;
    }
`

const AppearAnimation = keyframes`
    from {
        transform: rotateY(90deg);
        opacity: 0;
    } to {
        transform: rotateY(0deg);
        opacity: 1;
    }
`

export {
    DisappearAnimation,
    AppearAnimation
}