import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStopLoad, setText, updateInputValue } from '../store/inputTextSlice';
import { getTextGeneration } from '../api';

const BasicCard = ({ search, icon }) => {
    console.log("search",search)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCardClick = async ()=>{
        dispatch(setStopLoad(false))
        try {
            const content = await getTextGeneration({
                prompt: search
            });  
            console.log("content", content)          
            if (content && content.data.completion) {
                dispatch(updateInputValue([search, content.data.completion]))
                console.log("hhhh",[search, content.data.completion])
                dispatch(setText(""))
            } else {
                console.error('Unexpected response structure:', content);
            }
        } catch (error) {
            console.error('Error during text generation:', error);
        }
        
        navigate("/new-chat")
    }
    return (
        <Card onClick={handleCardClick} sx={{cursor: "pointer"}}>
            <CardContent className="basicCard" sx={{ minWidth: 50 }}>
                {icon}
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {search}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export { BasicCard };
