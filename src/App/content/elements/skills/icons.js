import styled from 'styled-components';

import CSharp from '../../../../images/icons/discolored/c-sharp.svg';
import Kotlin from '../../../../images/icons/discolored/kotlin.svg';
import CPlusPlus from '../../../../images/icons/discolored/c-plus-plus.svg';
import React from '../../../../images/icons/discolored/react.svg';
import Spring from '../../../../images/icons/discolored/spring.svg';
import Flyway from '../../../../images/icons/discolored/flyway.svg';
import Liquibase from '../../../../images/icons/discolored/liquibase.svg';
import Jooq from '../../../../images/icons/discolored/jooq.svg';
import Qt from '../../../../images/icons/discolored/qt.svg';
import Git from '../../../../images/icons/discolored/git.svg';
import Docker from '../../../../images/icons/discolored/docker.svg';
import Redux from '../../../../images/icons/discolored/redux.svg';
import Hibernate from '../../../../images/icons/discolored/hibernate.svg';
import Postgresql from '../../../../images/icons/discolored/postgresql.svg';
import Gradle from '../../../../images/icons/discolored/gradle.svg';

import { DEVICES } from '../../../../global/utils';

const scale = 0.55;

const CSharpIcon = styled(CSharp)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 80px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const KotlinIcon = styled(Kotlin)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 120px;
    
    @media screen and ${DEVICES.laptop} { 
        transform: scale(${ scale });
    }
`

const CPlusPlusIcon = styled(CPlusPlus)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 80px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const ReactIcon = styled(React)`
    fill: ${({ theme }) => theme.skills.svg.color};
    stroke: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const SpringIcon = styled(Spring)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const FlywayIcon = styled(Flyway)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 80px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const LiquibaseIcon = styled(Liquibase)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const JooqIcon = styled(Jooq)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 60px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const QtIcon = styled(Qt)`
    stroke: ${({ theme }) => theme.skills.svg.color};
    width: 60px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const GitIcon = styled(Git)`
    fill: ${({ theme }) => theme.skills.svg.color};
    width: 100px;
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const DockerIcon = styled(Docker)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const ReduxIcon = styled(Redux)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const HibernateIcon = styled(Hibernate)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const PostgresqlIcon = styled(Postgresql)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

const GradleIcon = styled(Gradle)`
    fill: ${({ theme }) => theme.skills.svg.color};
    
    @media screen and ${DEVICES.laptop} {
        transform: scale(${ scale });
    }
`

export {
    CSharpIcon,
    KotlinIcon,
    CPlusPlusIcon,
    ReactIcon,
    SpringIcon,
    FlywayIcon,
    LiquibaseIcon,
    JooqIcon,
    QtIcon,
    GitIcon,
    DockerIcon,
    ReduxIcon,
    HibernateIcon,
    PostgresqlIcon,
    GradleIcon
}