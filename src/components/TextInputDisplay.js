import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../assets/styles/InputText.css"

const TextInputDisplay = ({input}) => {
    return (
        <div className="inputTextContainer">
            <span className="inputText">
                {input}
            </span>
        </div>
    )
}

export { TextInputDisplay }