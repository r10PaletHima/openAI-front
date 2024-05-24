import React, { useEffect } from "react";
import "../assets/styles/AiResponse.css"
import { useDispatch, useSelector } from "react-redux";
import { updateInputValue } from "../store/inputTextSlice";
const AiResponnseLatest = ({ input, setDisplayedText, displayedText, setScrollToBottom, index }) => {
    const inputText = useSelector(state => state.inputText.value)
    const stopLoad = useSelector(state => state.inputText.stopLoad)
    const dispatch = useDispatch()
    // console.log("stopeload",stopLoad)
    useEffect(() => {
        const words = input.split(" ");
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (!stopLoad) {
                if (currentIndex < words.length) {
                    setDisplayedText(prevText => prevText + " " + words[currentIndex]);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setScrollToBottom(true);
                }
            } else {
                console.log("stopped")
                let updateData = [...inputText]
                updateData[index]= displayedText
                dispatch(updateInputValue(updateData))
                clearInterval(interval);
                setScrollToBottom(true);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [input, stopLoad]);

    return (
        <div>
            <span className="outputText" id="aiResponseDisplay">
                {displayedText}
            </span>
        </div>
    )
}

export { AiResponnseLatest }