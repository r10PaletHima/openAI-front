// LayoutStyles.js
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

const ListItemsButtonStyle = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: theme.palette.action.selected,
  }
}));

export { ListItemsButtonStyle };
