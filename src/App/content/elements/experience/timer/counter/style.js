import styled from 'styled-components';
import Title from '../../../../../../global/title';
import Text from '../../../../../../global/text';

import { AppearAnimation, DisappearAnimation } from './animations';

const height = 1.44;
const border_radius = 0.15;

const CounterTitle = styled(Title)`
    text-align: center;
    
    width: 2em;
    line-height: ${height}em;
    font-size: 48px;
    
    color: ${({ theme }) => theme.experience.timer.color};
    background:${({ theme }) => theme.experience.timer.background};
`

const AnimatedCounterTitle = styled(CounterTitle)`
    position: absolute;
    left: 0;
    
    height: ${height / 2}em;
    
    animation-fill-mode: both;
    
    overflow: hidden;
    
    text-overflow: clip;
`

const CounterContainer = styled.div`
    position: relative;
`

const CounterBack = styled(CounterTitle)`
    top: 0;
    left: 0;
    
    height: ${height}em;
    
    z-index: 0;
    
    border-radius: ${border_radius}em;
`

const CounterTop = styled(AnimatedCounterTitle)`
    top: 0;
    
    border-radius: ${border_radius}em ${border_radius}em 0 0;
    animation: ${DisappearAnimation} 0.3s linear 1;
    
    transform-origin: center bottom;
    
    opacity: 0;
    
    z-index: 2;
`

const CounterBottom = styled(AnimatedCounterTitle)`
    top: 50%;
    
    border-radius: 0 0 ${border_radius}em ${border_radius}em;
    border-top: 1px solid black;
    
    animation: ${AppearAnimation} 0.6s linear 1;
    
    transform-origin: center top;
    
    &::after {
        display: block;
        content: '${props => props.value}';
        margin-top: -${height / 2}em;
    }
    
    z-index: 2;
`

const CounterBackBottom = styled(CounterBottom)`
    animation: none;
    z-index: 1;
`

const CounterText = styled(Text)`
    font-size: 20px;
    text-align: center;
`

export {
    CounterContainer,
    CounterBack,
    CounterTop,
    CounterBottom,
    CounterBackBottom,
    CounterText
}