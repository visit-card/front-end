import React from 'react';

import { ExperienceContainer } from './style';

import ExperienceTimer from './timer';
import ExperienceChart from './chart';

const Experience = () => {

    return <ExperienceContainer>
        <ExperienceTimer />
        <ExperienceChart />
    </ExperienceContainer>
};

export default Experience;