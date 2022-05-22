import React from 'react';

import { NavigationComponent, NavigationContent, NavigationItem } from './style';

const Navigation = () => {

    return <NavigationContent>
        <NavigationComponent>
            <NavigationItem>ПРИВЕТСТВИЕ</NavigationItem>
            <NavigationItem>ОПЫТ</NavigationItem>
            <NavigationItem>ПРОЕТЫ</NavigationItem>
            <NavigationItem>НАВЫКИ</NavigationItem>
        </NavigationComponent>
    </NavigationContent>
};

export default Navigation;