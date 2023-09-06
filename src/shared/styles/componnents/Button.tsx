import {Button as MuiButton} from "@mui/material";
import {styled} from "@mui/material/styles";
export const Button = styled(MuiButton)(({ theme}) => ({
    background: `${theme.palette.text.secondary}`,
    color: `${theme.palette.text.primary}`,
    height: '3rem',
    '&:hover': {
        color: `${theme.palette.text.secondary}`,
        background: `${theme.palette.text.primary}`,
    },
}));

