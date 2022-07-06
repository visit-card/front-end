import React from 'react';

import PropTypes from 'prop-types';
import usePrevious from './usePrevious';

import { CounterContainer, CounterBottom, CounterBack, CounterTop, CounterBackBottom, CounterText } from './style';

const Counter = props => {

    const prevValue = usePrevious(props.value);
    return <div>
        <CounterContainer>
            <CounterBack>
                { props.value }
            </CounterBack>
            <CounterTop key={ props.value - 1 }>
                { prevValue }
            </CounterTop>
            <CounterBottom key={ props.value } value={ props.value }/>
            <CounterBackBottom value={ prevValue }/>
        </CounterContainer>
        <CounterText>{props.title}</CounterText>
    </div>
};

/**
 * title Заголовок, отображаемый в нижней части счетчика
 * value Значение счетчика
 */
Counter.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number
};

Counter.defaultProps = {
    title: 'Counter',
    value: 0
};

export default Counter;