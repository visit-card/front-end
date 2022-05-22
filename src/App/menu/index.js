import React from 'react';
import Avatar from './avatar';
import Navigation from './navigation';
import Login from './login';

import { MenuComponent } from './style';

const Menu = () => {

    return <MenuComponent>
        <Avatar />
        <Navigation />
        <Login />
    </MenuComponent>
};

export default Menu;