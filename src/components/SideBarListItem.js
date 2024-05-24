import { Divider, IconButton, ListItem, ListItemText, Menu, MenuItem } from "@mui/material"
import React, { useState } from "react"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemsButtonStyle } from "../assets/styles/JsStyles";
import "../assets/styles/SideBarList.css"
import { isEmptyArray } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../helpers/theme";
import { useNavigate } from "react-router-dom";

const SideBarListItem = ({ text, index }) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const inputText = useSelector(state => state.inputText.value)
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleView = () => {
        // Add your view logic here
        handleMenuClose();
    };

    const handleDelete = () => {
        // Add your delete logic here
        handleMenuClose();
    };

    const handleNewChat = ()=>{
        navigate("/")
    }

    return (
        <div>
            {
                index === 0 ? (
                    <div>
                        <ListItem key={text} disablePadding >
                            <ListItemsButtonStyle onClick={handleNewChat}>
                                <ControlPointIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ControlPointIcon>
                                <ListItemText primary={text} />
                            </ListItemsButtonStyle >
                        </ListItem>
                        <Divider />
                        {
                            !isEmptyArray(inputText) && <div className="searchHistory">Search History</div>
                        }
                    </div>
                ) : (
                    <div style={{ display:"flex", flex: 1}}>
                        <ListItem 
                            key={text}
                            disablePadding
                            // onClick={onClick}
                        >
                            <ListItemsButtonStyle>
                                <ListItemText primary={text} />
                            </ListItemsButtonStyle>
                        </ListItem>
                        <IconButton aria-label="more" onClick={handleMenuClick} >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleView}>View</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                        <Divider />
                    </div>
                )
            }
        </div>
    )
}

export { SideBarListItem }
