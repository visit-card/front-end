import styled from 'styled-components';
import Title from '../../../../global/title';
import Text from '../../../../global/text';

const WelcomeContainer = styled.div`
    display: flex;
    height: 100%;
    
    justify-content: center;
    align-items: center;
`

const WelcomeTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: flex-start;
    row-gap: 20px;
`

const WelcomeTitle = styled(Title)`
    font-size: 72px;
`

const WelcomeDescription = styled(Text)`
    max-width: 600px;
    
    font-size: 20px;
`

export {
    WelcomeContainer,
    WelcomeTitleContainer,
    WelcomeTitle,
    WelcomeDescription
}