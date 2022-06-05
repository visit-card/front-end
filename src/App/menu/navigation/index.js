import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { NavigationComponent, NavigationContainer, NavigationItem } from './style';
import { EXPERIENCE_ID, PROJECTS_ID, SKILLS_ID, WELCOME_ID } from '../../content/elements';

const mapStateToProps = (state) => {
    return { viewedSectionId: state.viewedSectionId }
}

const Navigation = props => {

    const items = [
        {
            id: WELCOME_ID,
            title: 'ПРИВЕТСТВИЕ'
        },
        {
            id: EXPERIENCE_ID,
            title: 'ОПЫТ'
        },
        {
            id: PROJECTS_ID,
            title: 'ПРОЕКТЫ'
        },
        {
            id: SKILLS_ID,
            title: 'НАВЫКИ'
        }
    ];

    const goToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    return <NavigationContainer>
        <NavigationComponent>
            {
                items.map( item =>
                    <NavigationItem
                        key={item.id}
                        isActive={props.viewedSectionId === item.id}
                        onClick={() => goToSection(item.id)}
                    >
                        { item.title }
                    </NavigationItem>
                )
            }
        </NavigationComponent>
    </NavigationContainer>
};

/**
 * viewedSectionId Отображаемый в данный момент компонент
 */
Navigation.propTypes = {
    viewedSectionId: PropTypes.string
};

export default connect(mapStateToProps)(Navigation);