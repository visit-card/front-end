import React from 'react';

import { SkillContainer, SkillsContainer, SkillsTable } from './style';
import {
    KotlinIcon, CSharpIcon, CPlusPlusIcon, ReactIcon, SpringIcon,
    FlywayIcon, LiquibaseIcon, JooqIcon, QtIcon, GitIcon,
    DockerIcon, ReduxIcon, HibernateIcon, PostgresqlIcon, GradleIcon
} from './icons';


const Skills = () => {

    const skills = [
        <KotlinIcon key={'kotlin'} />,
        <CSharpIcon key={'c_sharp'} />,
        <CPlusPlusIcon key={'c_plus_plus'} />,
        <ReactIcon key={'react'} />,
        <SpringIcon key={'spring'} />,
        <FlywayIcon key={'flyway'} />,
        <LiquibaseIcon key={'liquibase'} />,
        <JooqIcon key={'jooq'} />,
        <QtIcon key={'qt'} />,
        <GitIcon key={'git'} />,
        <DockerIcon key={'docker'} />,
        <ReduxIcon key={'redux'} />,
        <HibernateIcon key={'hibernate'} />,
        <PostgresqlIcon key={'postgresql'} />,
        <GradleIcon key={'gradle'} />
    ];

    return <SkillsContainer>
        <SkillsTable>
            {
                skills.map( (item, index) =>
                    <SkillContainer key={index}>
                        { item }
                    </SkillContainer>
                )
            }
        </SkillsTable>
    </SkillsContainer>
};

export default Skills;