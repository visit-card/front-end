import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ScrollableSection } from './style';
import { useDispatch } from 'react-redux';
import { changeViewedSection } from '../../../actions';
import { useInView } from 'react-intersection-observer';

const ScrollableElement = props => {
    const { ref, inView } = useInView({
        threshold: [0.25, 0.5, 0.75],
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (inView) {
            dispatch(changeViewedSection(props.id))
        }
    }, [inView])

    return (
        <ScrollableSection ref={ref} id={props.id}>
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