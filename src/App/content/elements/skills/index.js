import React from 'react';

import { useSelector } from 'react-redux';
import { themes } from '../../../../theme';
import {SkillContainer, SkillsContainer, SkillsTable} from './style';

import CSharpIcon from '../../../../images/icons/discolored/c-sharp.svg';
import KotlinIcon from '../../../../images/icons/discolored/kotlin.svg';
import CPlusPlusIcon from '../../../../images/icons/discolored/c-plus-plus.svg';
import ReactIcon from '../../../../images/icons/discolored/react.svg';
import SpringIcon from '../../../../images/icons/discolored/spring.svg';
import FlywayIcon from '../../../../images/icons/discolored/flyway.svg';
import LiquibaseIcon from '../../../../images/icons/discolored/liquibase.svg';
import JooqIcon from '../../../../images/icons/discolored/jooq.svg';
import QtIcon from '../../../../images/icons/discolored/qt.svg';
import GitIcon from '../../../../images/icons/discolored/git.svg';
import DockerIcon from '../../../../images/icons/discolored/docker.svg';
import ReduxIcon from '../../../../images/icons/discolored/redux.svg';
import HibernateIcon from '../../../../images/icons/discolored/hibernate.svg';
import PostgresqlIcon from '../../../../images/icons/discolored/postgresql.svg';
import GradleIcon from '../../../../images/icons/discolored/gradle.svg';

const Skills = () => {

    const theme = useSelector(state => state.theme);

    const skills = [
        <KotlinIcon key={'kotlin'} fill={themes[theme].skills.svg.color} />,
        <CSharpIcon key={'c_sharp'} fill={themes[theme].skills.svg.color} />,
        <CPlusPlusIcon key={'c_plus_plus'} fill={themes[theme].skills.svg.color} />,
        <ReactIcon key={'react'} stroke={themes[theme].skills.svg.color} fill={themes[theme].skills.svg.color} />,
        <SpringIcon key={'spring'} fill={themes[theme].skills.svg.color} />,
        <FlywayIcon key={'flyway'} fill={themes[theme].skills.svg.color} />,
        <LiquibaseIcon key={'liquibase'} fill={themes[theme].skills.svg.color} />,
        <JooqIcon key={'jooq'} fill={themes[theme].skills.svg.color} />,
        <QtIcon key={'qt'} stroke={themes[theme].skills.svg.color} />,
        <GitIcon key={'git'} fill={themes[theme].skills.svg.color} />,
        <DockerIcon key={'docker'} fill={themes[theme].skills.svg.color} />,
        <ReduxIcon key={'redux'} fill={themes[theme].skills.svg.color} />,
        <HibernateIcon key={'hibernate'} fill={themes[theme].skills.svg.color} />,
        <PostgresqlIcon key={'postgresql'} fill={themes[theme].skills.svg.color} />,
        <GradleIcon key={'gradle'} fill={themes[theme].skills.svg.color} />
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