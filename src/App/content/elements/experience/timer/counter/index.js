import React from 'react';

import {CounterContainer, CounterBottom, CounterBack, CounterTop, CounterBackBottom, CounterText} from './style';
import PropTypes from 'prop-types';

const Counter = props => {

    return <div>
        <CounterContainer>
            <CounterBack>
                { props.value }
            </CounterBack>
            <CounterTop key={ props.value - 1 }>
                { props.value - 1 }
            </CounterTop>
            <CounterBottom key={ props.value } value={props.value}/>
            <CounterBackBottom value={props.value - 1}/>
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