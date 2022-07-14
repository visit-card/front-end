import React from 'react';
import Avatar from './avatar';
import Navigation from './navigation';
import Source from './source';

import { MenuComponent } from './style';

const Menu = () => {

    return <MenuComponent>
        <Avatar />
        <Navigation />
        <Source />
    </MenuComponent>
};

export default Menu;