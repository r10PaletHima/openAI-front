import React from "react";
import "../assets/styles/AiResponse.css"
import { useSelector } from "react-redux";
const AiResponseDisplay = ({ input }) => {
    return (
        <div>
            <span className="outputText" id="aiResponseDisplay">
                {input}
            </span>
        </div>
    )
}

export { AiResponseDisplay }