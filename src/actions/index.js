import {CHANGE_SECTION, CHANGE_THEME} from './types';

const changeTheme = {
    type: CHANGE_THEME
}

const changeViewedSection = (sectionId) => {
    return {
        type: CHANGE_SECTION,
        payload: sectionId
    }
}

export { changeTheme, changeViewedSection }