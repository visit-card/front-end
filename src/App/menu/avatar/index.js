import React, { useState } from 'react';

import { themes } from '../../../theme';
import { changeTheme } from '../../../actions';
import { AppearAnimation, DisappearAnimation } from './animations';
import { AvatarContainer, AvatarImage, AvatarTitle } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Avatar = () => {

    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const [animation, setAnimation] = useState(null);

    return <AvatarContainer>
        <AvatarImage
            src={themes[theme].avatar}
            animation={animation}
            onClick={() => setAnimation(DisappearAnimation) }
            onAnimationEnd={() => {
                if (animation === DisappearAnimation) {
                    dispatch(changeTheme)
                    setAnimation(AppearAnimation)
                } else {
                    setAnimation(null)
                }
            }}
        />
        <AvatarTitle>ЯКОВ ДУДИН</AvatarTitle>
    </AvatarContainer>
};

export default Avatar;