import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e9e8e8',
        },
        secondary: {
            main: '#FF611A',
        },
        background: {
            default: '#FFFFFF',
        },
        text: {
            primary: '#000000',
        },
        shape: {
            borderRadius: 8, // Default border radius, you can customize it
        },
        action: {
            hover: "#e9e8e8",
            selected: "#e9e8e8",
            selectedHover: "selectedHover"
        },

    },
});

export { theme };
