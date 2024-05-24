import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextFieldArea } from "../assets/styles/JsStyles/NewChatStyles";
import { IconButton, InputAdornment } from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { setStopLoad, setText, setValue } from "../store/inputTextSlice";
import { getTextGeneration } from "../api";

const SearchBar = () => {
    const inputTextData = useSelector(state => state.inputText.text)
    const stopLoad = useSelector(state => state.inputText.stopLoad)
    const dispatch = useDispatch()
    const handleInputText = (event) => {
        console.log("textEntered", event.target.value)
        dispatch(setText(event.target.value))
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            dispatch(setStopLoad(false))
            try {
                const content = await getTextGeneration({
                    prompt: inputTextData
                });
                console.log('API Response:', content); // Log the response for debugging
                
                if (content && content.data.completion && content.data.completion[0] && content.data.completion[0].generated_text) {
                    dispatch(setValue([
                        inputTextData,
                        content.data.completion[0].generated_text
                    ]));
                    dispatch(setText(""))
                } else {
                    console.error('Unexpected response structure:', content);
                }
            } catch (error) {
                console.error('Error during text generation:', error);
            }
        }
    };
    
    const handleSendClick = async () => {
        dispatch(setStopLoad(false))
        try {
            const content = await getTextGeneration({
                prompt: inputTextData
            });
            console.log('API Response:', content); // Log the response for debugging
            
            if (content && content.data.completion && content.data.completion[0] && content.data.completion[0].generated_text) {
                dispatch(setValue([
                    inputTextData,
                    content.data.completion[0].generated_text
                ]));
                dispatch(setText(""))
            } else {
                console.error('Unexpected response structure:', content);
            }
        } catch (error) {
            console.error('Error during text generation:', error);
        }
    };
    
    const handleVoiceInput = () => {
        // Implement voice-to-text functionality here
        console.log('Voice input triggered');
    };
    
    const handleTextToVoice = () => {
        // Implement text-to-voice functionality here
        console.log('Text-to-voice triggered');
    };
    
    const handleStopClick = () => {
        console.log("stopLoad", stopLoad)
        dispatch(setStopLoad(true))
        setStopLoad(true)
    };
    return (
        <div className="searchBarContainer">
            <TextFieldArea
                variant="outlined"
                placeholder="Message ChatAI"
                value={inputTextData}
                onChange={handleInputText}
                onKeyDown={handleKeyDown}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleTextToVoice}>
                                <VolumeUpIcon />
                            </IconButton>
                            <IconButton onClick={handleVoiceInput}>
                                <MicIcon />
                            </IconButton>
                            <IconButton onClick={handleSendClick}>
                                <ArrowCircleUpIcon />
                            </IconButton>
                            <IconButton onClick={handleStopClick}> {/* Add stop button */}
                                <StopIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <span className="noteInfo">ChatAI can make mistakes. Check important info.</span>
        </div>
    )
}

export { SearchBar }