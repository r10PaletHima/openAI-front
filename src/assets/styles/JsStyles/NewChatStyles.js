import { TextField, styled } from "@mui/material";

const TextFieldArea = styled(TextField)(({ theme }) => ({
    width: "100%",
    "& .MuiOutlinedInput-root": {
        borderRadius: theme.shape.borderRadius * 10, // Adjust the multiplier as needed
      }
}))

export { TextFieldArea }