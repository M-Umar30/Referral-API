import { Button } from '@mui/material';
import React, { useState } from 'react';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import './../style.css';


function LikeControlButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setIsDisliked(false); // Reset dislike state when liking
    };

    const handleDislikeClick = () => {
        setIsDisliked(!isDisliked);
        setIsLiked(false); // Reset like state when disliking
    };

    return (
        <div className='button-group'>
            <Button variant={isLiked ? "contained" : "outlined"} color="success" sx={{width: '20px'}} onClick={handleLikeClick}>
                <ThumbUpOffAltOutlinedIcon fontSize='large'></ThumbUpOffAltOutlinedIcon>
            </Button>
            <Button variant={isDisliked ? "contained" : "outlined"} color="error" sx={{width: '20px'}} onClick={handleDislikeClick}>
                <ThumbDownOffAltOutlinedIcon fontSize='large'></ThumbDownOffAltOutlinedIcon>
            </Button>
        </div>
    );
}

export default LikeControlButton;
