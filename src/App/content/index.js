import React from 'react';

import { ContentComponent } from './style';
import { EXPERIENCE_ID, PROJECTS_ID, SKILLS_ID, WELCOME_ID } from './elements';

import ScrollableElement from './scrollableElement';
import Welcome from './elements/welcome';
import Experience from './elements/experience';
import Projects from './elements/projects';

const Content = () => {

    return <ContentComponent>
        <ScrollableElement id={WELCOME_ID}>
            <Welcome />
        </ScrollableElement>
        <ScrollableElement id={EXPERIENCE_ID}>
            <Experience/>
        </ScrollableElement>
        <ScrollableElement id={PROJECTS_ID}>
            <Projects />
        </ScrollableElement>
        <ScrollableElement id={SKILLS_ID}>
            <div>SKILLS</div>
        </ScrollableElement>
    </ContentComponent>
};

export default Content;