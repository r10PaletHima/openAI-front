import { useParams } from "react-router-dom";
import "../assets/styles/NewChatPage.css"
import { OutputContentDisplay } from "../components/OutputContentDisplay"
import { SearchBar } from "../components/SearchBar"
import { OutputContentDisplayHistory } from "../components/OutputContentDisplayHistory";
import { useSelector } from "react-redux";
import { SearchBarHistory } from "../components/SearchBarHistory";

const History = () => {
    const { id } = useParams();
    let inputText = useSelector(state=>state.inputText.value)
    inputText = [inputText[id-1],inputText[id]]
    return (
        <div className="newChatPage">
            <OutputContentDisplayHistory inputText={inputText}/>
            <div className="searchBarContainerMain">
                <SearchBar/>
            </div>
        </div>
    )
}

export { History }