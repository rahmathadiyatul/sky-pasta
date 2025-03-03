import React, { useState } from 'react';
import './ChooseMenu.css';
import MenuItem from './MenuItem/MenuItem';
import LowerItem from './LowerItem/LowerItem';

const ChooseMenu = ({ onMenuChange }) => {
    const [slide, setSlide] = useState(false);

    const handleLowerMenuClick = (menu) => {
        setSlide(!slide);
        if (onMenuChange) {
            onMenuChange(menu);
        }
    };

    return (
        <div className='menu-container'>
            <div className='upper-menu'>
                <MenuItem slide={slide}></MenuItem>
            </div>
            <div className='lower-menu'>
                <LowerItem onLowerMenuClick={handleLowerMenuClick} menuName='Samba Lado Spaghetti' imgUrl='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157379/skypasta/2_supf1m.png'></LowerItem>
                <LowerItem onLowerMenuClick={handleLowerMenuClick} menuName='Pasta Apadah Tau' imgUrl='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157378/skypasta/1_jl9jtt.png'></LowerItem>
            </div>
        </div>
    );
};

export default ChooseMenu;
