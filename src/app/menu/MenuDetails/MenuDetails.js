import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DislikeIcon from '@mui/icons-material/ThumbDownOffAlt';
import StarIcon from '@mui/icons-material/Star';
import LikeIcon from '@mui/icons-material/ThumbUpAlt';
import { Box } from '@mui/material';
import './MenuDetails.css';

const MenuDetails = ({ selectedMenu }) => {
    const [currentData, setCurrentData] = useState({});
    const [animateOut, setAnimateOut] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    const menuData = {
        'Samba Lado Spaghetti': {
            menuTitle: 'Samba Lado Spaghetti',
            menuRating: '4.6',
            menuPar: 'This impressive spaghetti is a perfect party dish and a fun meal to cook together with your guests.'
        },
        'Pasta Apadah Tau': {
            menuTitle: 'Pasta Apadah Tau',
            menuRating: '4.8',
            menuPar: 'This Pasta Apadah Tau, au dah rasanya gimana. Pokonya gitu dah, cobain aja dulu ntar juga ketagihan banget banget!'
        }
    };

    useEffect(() => {
        setAnimateOut(true);
        const timer1 = setTimeout(() => {
            setCurrentData(menuData[selectedMenu]);
            setAnimateOut(false);
            setAnimateIn(true);
        }, 500); 

        const timer2 = setTimeout(() => {
            setAnimateIn(false);
        }, 1000); 

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [selectedMenu]);

    return (
        <div className='right-data'>
            <Card sx={{ maxWidth: 250, borderRadius: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', backgroundColor: 'rgba(250,250,250,0.5)' }}>
                <Box sx={{ position: 'relative', left: '1em', top: '2em', width: '4em', height: '5em', borderRadius: '35%', backgroundColor: 'rgba(255, 10, 194, 0.5)' }}>
                    <Typography className={`${animateOut ? 'disappear' : ''} ${animateIn ? 'appear' : ''} ${animateOut ? 'slide-out' : (animateIn ? 'slide-in' : '')}`} sx={{ left: '.6em', fontSize: '2.8em', fontWeight: '900', position: 'relative', marginBottom: 'none' }}>
                        {currentData.menuRating}
                    </Typography>
                    <StarIcon sx={{ position: 'relative', bottom: '.8em', width: '.5em' }}></StarIcon>
                </Box>
                <CardHeader
                    className={`${animateOut ? 'disappear' : ''} ${animateIn ? 'appear' : ''} ${animateOut ? 'slide-out' : (animateIn ? 'slide-in' : '')}`}
                    sx={{ position: 'relative', top: '2em', textAlign: 'left' }}
                    titleTypographyProps={{ fontSize: '1.2em', fontWeight: 'bolder' }}
                    title={currentData.menuTitle}
                />
                <CardContent>
                    <Typography className={`${animateOut ? 'disappear' : ''} ${animateIn ? 'appear' : ''} ${animateOut ? 'slide-out' : (animateIn ? 'slide-in' : '')}`} sx={{ textAlign: 'left', width: '14em', fontWeight: 'bold' }} variant="body2" color="text.secondary">
                        {currentData.menuPar}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <LikeIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <DislikeIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default MenuDetails;
