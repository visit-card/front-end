import React from 'react';

import { ContentComponent } from './style';
import { EXPERIENCE_ID, PROJECTS_ID, SKILLS_ID, WELCOME_ID } from './elements';

import ScrollableElement from './scrollableElement';
import Welcome from './elements/welcome';

const Content = () => {

    return <ContentComponent>
        <ScrollableElement id={WELCOME_ID}>
            <Welcome />
        </ScrollableElement>
        <ScrollableElement id={EXPERIENCE_ID}>
            <div>EXPERIENCE</div>
        </ScrollableElement>
        <ScrollableElement id={PROJECTS_ID}>
            <div>PROJECTS</div>
        </ScrollableElement>
        <ScrollableElement id={SKILLS_ID}>
            <div>SKILLS</div>
        </ScrollableElement>
    </ContentComponent>
};

export default Content;