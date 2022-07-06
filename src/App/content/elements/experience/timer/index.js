import React from 'react';

import { useStopwatch } from 'react-timer-hook';
import { CARIER_START_DATE } from '../../../../../global/utils';
import { TimerContainer } from './style';

import Counter from './counter';
import moment from 'moment';

const ExperienceTimer = () => {

    const {
        seconds,
        minutes,
        hours,
        days
    } = useStopwatch({ autoStart: true, offsetTimestamp:  new Date().getTime() + new Date(new Date() - CARIER_START_DATE).getTime() });

    const duration = moment.duration(days, 'days')
    return <TimerContainer>
        <Counter title={'Годы'} value={ duration.years() } />
        <Counter title={'Месяцы'} value={ duration.months() } />
        <Counter title={'Дни'} value={ duration.days() } />
        <Counter title={'Часы'} value={ hours } />
        <Counter title={'Минуты'} value={ minutes } />
        <Counter title={'Секунды'} value={ seconds } />
    </TimerContainer>
};

export default ExperienceTimer;