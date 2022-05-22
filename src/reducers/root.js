import { CHANGE_THEME } from '../actions/types';

import { DARK_NAME, LIGHT_NAME } from '../theme'

const initialState = {
    theme: localStorage.theme || LIGHT_NAME
}

const root = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            const theme = state.theme === DARK_NAME ? LIGHT_NAME : DARK_NAME

            localStorage.theme = theme;
            return {...state, theme: theme};
        }
        default:
            return state;
    }
}

export default root