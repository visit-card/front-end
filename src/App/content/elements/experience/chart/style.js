import styled from 'styled-components';

import Title from '../../../../../global/title';
import Text from '../../../../../global/text';

import { SCROLLBAR_SIZE } from '../../../../../global/style';

const logo_size = 50;
const logo_border = 5;
const logo_left_margin = 20;
const card_tail = 15;
const card_height = 200;
const bar_text_margin = 10;
const bar_text_size = 30;

const ExperienceChartContainer = styled.div`
    display: flex;
    align-items: center;
    
    padding: 20px;
    overflow: hidden;
`

const ChartContainer = styled.div`
    position: relative;
    
    height: 600px;
    
    overflow-y: hidden;
    overflow-x: auto;
    
    white-space: nowrap;
    
    &::before {
        display: block;
        position: sticky;
        
        left: 0;
        top: 50%;
        width: 100%;
        height: 4px;
        
        content: '';
        background: ${({ theme }) => theme.experience.chart.background};
        
        z-index: 2;
    }
`

const BarLogo = styled.div`
    display: flex;
    position: absolute;
    
    top: calc(50% - ${ logo_border + logo_size / 2 }px);
    left: ${ logo_left_margin }px;
    
    width: ${ logo_size }px;
    height: ${ logo_size }px;
    
    align-items: center;
    justify-content: center;
    
    border: ${ logo_border }px solid ${({ theme }) => theme.experience.chart.background};
    border-radius: 50%;
    
    background: ${({ theme }) => theme.experience.logo.background};
    
    z-index: 3;
`

const BarCard = styled.div`
    position: absolute;
    
    width: 400px;
    height: ${ card_height }px;
    
    padding: 10px;
    
    border-radius: 5px;
    background: ${({ theme }) => theme.experience.chart.background};
     
    z-index: 3;
    
    &::after {
        position: absolute;
        
        top: 220px;
        left: ${ logo_left_margin + logo_border + (logo_size / 2) - card_tail }px;
        
        content: "";
        
        border-style: solid;
        border-width: ${ card_tail }px ${ card_tail }px 0;
        border-color: ${({ theme }) => theme.experience.chart.background} transparent;
    }
`

const BarText = styled(Text)`
    display: flex;
    position: absolute;
    
    align-items: center;
    justify-content: center;
    
    left: ${ logo_left_margin + logo_border + (logo_size / 2) - (bar_text_size / 2) }px;
    width: ${ bar_text_size }px;
    
    font-size: 24px;
    
    writing-mode: vertical-rl;
`

const Bar = styled.div`
    display: inline-block;
    position: relative;
    
    width: 500px;
    height: 100%;
    
    &:nth-child(odd) {
        ${BarCard} {
            top: calc(100% - ${ card_height }px - ${ card_tail }px - ${ SCROLLBAR_SIZE }px);
            
            &::after {
                top: -${ card_tail }px;
                border-width: 0 ${ card_tail }px ${ card_tail }px;
            }
        }
        
        ${BarText} {
            bottom: calc(50% + ${ (logo_size / 2) + logo_border + bar_text_margin }px);
            
            &::after {
                content: " — "
            }
        }
    }
    
    &:nth-child(even) {
        ${BarText} {
            top: calc(50% + ${ (logo_size / 2) + logo_border + bar_text_margin }px);
            &::before {
                content: " — "
            }
        }
    }
`

const CardTitle = styled(Title)`
    text-align: center;
    color: ${({ theme }) => theme.experience.chart.color};
`

const CardText = styled(Text)`
    margin-top: 10px;
    
    text-align: center;
    word-break: break-word;
    white-space: pre-line;
`

export { ExperienceChartContainer, ChartContainer, Bar, BarLogo, BarCard, CardTitle, CardText, BarText }