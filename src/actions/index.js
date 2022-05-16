import { CHANGE_THEME } from './types';

const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        theme: theme
    }
}

export default { changeTheme }