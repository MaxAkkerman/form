import {Checkbox as MuiCheckbox} from "@mui/material";
import {styled} from "@mui/material/styles";
export const Checkbox = styled(MuiCheckbox)(({ theme}) => ({
    '& .MuiSvgIcon-root': {
        fill: theme.palette.mode === 'dark' ? '#65C466' : theme.palette.text.secondary,
    },
    '&:hover': {
        '& .MuiSvgIcon-root': {
            fill: theme.palette.mode === 'light' && theme.palette.text.primary,
        }
    }
}));

