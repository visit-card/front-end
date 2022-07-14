import React from 'react';

import { WelcomeContainer, WelcomeDescription, WelcomeTitle, WelcomeTitleContainer } from './style';

const Welcome = () => {

    return <WelcomeContainer>
        <WelcomeTitleContainer>
            <WelcomeTitle>ПРИВЕТ,</WelcomeTitle>
            <WelcomeDescription>
                Меня зовут Яков. Я Full stack разработчик из Томска.
                Основной стэк технологий: Kotlin, JavaScript, TypeScript, HTML, CSS, Spring, React, Redux, Gradle, PostgreSQL, Hibernate, Liquibase/Flyway, Gradle
            </WelcomeDescription>
        </WelcomeTitleContainer>
    </WelcomeContainer>
};

export default Welcome;