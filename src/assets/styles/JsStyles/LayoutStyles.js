import { styled } from "@mui/material";

const ListItemsButton = styled("ListItemButton")(({theme})=>({
    display: "flex",
    gap: "3%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",
    cursor: "pointer"
}))

export { ListItemsButton }