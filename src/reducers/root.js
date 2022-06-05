import {CHANGE_SECTION, CHANGE_THEME} from '../actions/types';

import { DARK_NAME, LIGHT_NAME } from '../theme'
import { WELCOME_ID } from '../App/content/elements';

const initialState = {
    theme: localStorage.theme || LIGHT_NAME,
    viewedSectionId: WELCOME_ID
}

const root = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            const theme = state.theme === DARK_NAME ? LIGHT_NAME : DARK_NAME

            localStorage.theme = theme;
            return {...state, theme: theme};
        }
        case CHANGE_SECTION: {
            return {...state, viewedSectionId: action.payload};
        }
        default:
            return state;
    }
}

export default root