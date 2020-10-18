import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton  className='swipeButtons_repeat'>
                <ReplayIcon style={{color:'#FDBE03'}} fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButtons_left'>
                <CloseIcon style={{color:'#FD2B7B'}}  fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButtons_star'>
                <StarIcon style={{color:'#2CB2FF'}} fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButtons_right'>
                <FavoriteIcon style={{color:'#1EE4A4'}} fontSize='large'/>
            </IconButton>
            <IconButton  className='swipeButtons_lightning'>
                <FlashOnIcon style={{color:'#8A4DBF'}} fontSize='large'/>
            </IconButton>
            


        </div>
    )
}

export default SwipeButtons
