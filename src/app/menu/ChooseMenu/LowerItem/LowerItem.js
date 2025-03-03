import React from 'react';
import { Typography } from '@mui/material';
import '../ChooseMenu.css';

const LowerItem = ({ menuName, imgUrl, onLowerMenuClick }) => {
    const handleClick = () => {
        if (onLowerMenuClick) {
            onLowerMenuClick(menuName);
        }
    };

    return (
        <div onClick={handleClick} className='lower-menu-card'>
            <img style={{ width: '5em' }} src={imgUrl} alt='Lower Item'></img>
            <Typography variant='h2' sx={{ fontSize: '1em', fontWeight: 'bolder', display: 'block' }}>{menuName}</Typography>
        </div>
    );
};

export default LowerItem;
