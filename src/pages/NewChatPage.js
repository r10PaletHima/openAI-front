import "../assets/styles/NewChatPage.css"
import { OutputContentDisplay } from "../components/OutputContentDisplay"
import { SearchBar } from "../components/SearchBar"

const NewChatPage = () => {
    return (
        <div className="newChatPage">
            <OutputContentDisplay/>
            <div className="searchBarContainerMain">
                <SearchBar/>
            </div>
        </div>
    )
}

export { NewChatPage }