import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/OutputDisplay.css"
import { TextInputDisplay } from "./TextInputDisplay";
import { AiResponseDisplay } from "./AiResponseDisplay";
import { AiResponnseLatest } from "./AiResponseLatest";
import { getTextGeneration } from "../api";

const OutputContentDisplayHistory = ({inputText}) => {
    console.log("inputTextjj",inputText)
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [data, setData] = useState([])

    const handleSendClick = async () => {
        try {
            const content = await getTextGeneration({
                prompt: inputText[0]
            });
            console.log('API Response:', content); // Log the response for debugging
            
            if (content && content.data.completion && content.data.completion[0] && content.data.completion[0].generated_text) {
                setData([inputText[0], content.data.completion[0].generated_text])
            } else {
                console.error('Unexpected response structure:', content);
            }
        } catch (error) {
            console.error('Error during text generation:', error);
        }
    };

    useEffect(()=>{
        handleSendClick()
    }, [])

    useEffect(() => {
        if (scrollToBottom) {
            const element = document.getElementById("outputContent");
            if (element) {
                element.scrollTop = element.scrollHeight;
                setScrollToBottom(false);
            }
        }
    }, [scrollToBottom]);

    return (
        <div id="outputContent" className="outputDisplay">
            {
                data.map((input, index) => {
                    if(index == inputText.length-1){
                        return(
                            <AiResponnseLatest input={input} setDisplayedText={setDisplayedText} displayedText={displayedText} setScrollToBottom={setScrollToBottom} index={index} key={index}/>
                        )
                    }
                    else{
                        if(index % 2 === 0) {
                            return (
                                <TextInputDisplay input={input?input: inputText[0] } key={index} />
                            )
                        } else {
                            return (
                                <AiResponseDisplay input={input}  />
                            )
                        }
                    }
                })
            }
        </div>
    )
}

export { OutputContentDisplayHistory }