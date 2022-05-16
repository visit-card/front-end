import { CHANGE_THEME } from '../actions/types';

const initialState = {
    theme: localStorage.theme || 'theme-light'
}

const root = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            localStorage.theme = action.payload;
            return {...state, theme: action.theme};
        default:
            return state;
    }
}

export default root