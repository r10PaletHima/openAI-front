import React from "react";
import { BasicCard } from "./SuggestedSearchCards";
import { suggetedSearch } from "../helpers/constants";
import { suggestedSearchIcons } from "../helpers/constants";
import "../assets/styles/SuggestedSearch.css"
import { Box } from "@mui/material";
const SuggetedSearch = () => {
    return (
        <Box className="suggestedSearch" sx={{ display: 'flex' }}>
            {suggetedSearch.map((search, i) => (
                <BasicCard key={i} search={search} icon={suggestedSearchIcons[i]} />
            ))}
        </Box>
    )
}

export { SuggetedSearch }