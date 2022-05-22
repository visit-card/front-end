import { dark } from './themes/dark';
import { light } from './themes/light';

const DARK_NAME = 'theme-dark'
const LIGHT_NAME = 'theme-light'

const themes = { [DARK_NAME]: dark, [LIGHT_NAME]: light}

export {
    themes,
    DARK_NAME,
    LIGHT_NAME
}