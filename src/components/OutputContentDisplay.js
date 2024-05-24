import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/OutputDisplay.css"
import { TextInputDisplay } from "./TextInputDisplay";
import { AiResponseDisplay } from "./AiResponseDisplay";
import { AiResponnseLatest } from "./AiResponseLatest";

const OutputContentDisplay = () => {
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    let inputText = useSelector(state => state.inputText.value)
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
                inputText.map((input, index) => {
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

export { OutputContentDisplay }