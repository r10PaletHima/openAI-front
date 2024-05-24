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
import "../assets/styles/SearchBar.css"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [listening, setListening] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const inputTextData = useSelector(state => state.inputText.text);
    const stopLoad = useSelector(state => state.inputText.stopLoad);
    const inputText = useSelector(state => state.inputText.value);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleInputText = (event) => {
        console.log("textEntered", event.target.value);
        dispatch(setText(event.target.value));
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            dispatch(setStopLoad(false));
            try {
                const content = await getTextGeneration({
                    prompt: inputTextData
                });
                console.log('API Response:', content); // Log the response for debugging

                if (content && content.data.completion) {
                    dispatch(setValue([
                        inputTextData,
                        content.data.completion
                    ]));
                    dispatch(setText(""));
                    navigate("/new-chat")
                } else {
                    console.error('Unexpected response structure:', content);
                }
            } catch (error) {
                console.error('Error during text generation:', error);
            }
        }
    };

    const handleSendClick = async () => {
        dispatch(setStopLoad(false));
        try {
            const content = await getTextGeneration({
                prompt: inputTextData
            });
            console.log('API Response:', content); // Log the response for debugging

            if (content && content.data.completion) {
                dispatch(setValue([
                    inputTextData,
                    content.data.completion
                ]));
                dispatch(setText(""));
                navigate("/new-chat")
            } else {
                console.error('Unexpected response structure:', content);
            }
        } catch (error) {
            console.error('Error during text generation:', error);
        }
    };

    const handleVoiceInput = async () => {
        try {
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.start();

            recognition.onstart = () => {
                setListening(true);
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                dispatch(setText(transcript));
            };

            recognition.onend = () => {
                setListening(false);
            };
        } catch (error) {
            console.error('Error with voice input:', error);
        }
    };

    const handleTextToVoice = () => {
        if (speaking) {
            speechSynthesis.pause();
            setSpeaking(false);
        } else {
            setSpeaking(true);
            const utterance = new SpeechSynthesisUtterance(inputText[inputText.length-1]);
            utterance.onend = () => {
                setSpeaking(false);
            };
            speechSynthesis.speak(utterance);
        }
    };

    const handleStopClick = () => {
        console.log("stopLoad", stopLoad);
        dispatch(setStopLoad(true));
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
                                <VolumeUpIcon className={speaking ? "speaking" : ""} />
                            </IconButton>
                            <IconButton onClick={handleVoiceInput}>
                                <MicIcon className={listening ? "listening" : ""} />
                            </IconButton>
                            <IconButton onClick={handleSendClick}>
                                <ArrowCircleUpIcon />
                            </IconButton>
                            <IconButton onClick={handleStopClick}>
                                <StopIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <span className="noteInfo">ChatAI can make mistakes. Check important info.</span>
        </div>
    );
};

export { SearchBar };
