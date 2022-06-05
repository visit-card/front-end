import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useOnScreen } from '../useOnScreen';
import { ScrollableSection } from './style';
import { useDispatch } from 'react-redux';
import { changeViewedSection } from '../../../actions';

const ScrollableElement = props => {
    const scrollableElementRef = useRef(null);
    const isOnScreen = useOnScreen(scrollableElementRef);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOnScreen) {
            dispatch(changeViewedSection(props.id))
        }
    }, [isOnScreen])

    return (
        <ScrollableSection ref={scrollableElementRef} id={props.id}>
            { props.children }
        </ScrollableSection>
    );
};

/**
 * children Отображаемый элемент в секции
 * id Уникальный идентификатор элемента
 * elementInSight Функция вызываемая при попадании элемента в поле видимости
 */
ScrollableElement.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    id: PropTypes.string
};

ScrollableElement.defaultProps = {
    children: () => <div/>,
    id: 'scrollableElement'
};

export default ScrollableElement;