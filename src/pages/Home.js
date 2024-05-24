import "../assets/styles/NewChatPage.css"
import { SearchBar } from "../components/SearchBar"
import { SuggetedSearch } from "../components/SuggestedSearch"

const Home = () => {
    return (
        <div className="newChatPage">
            <SuggetedSearch />
            <div className="searchBarContainerMain">
                <SearchBar/>
            </div>
        </div>
    )
}

export { Home }