import {FormLabel as MuiFormLabel} from "@mui/material";
import {styled} from "@mui/material/styles";
export const FormLabel = styled(MuiFormLabel)(({ theme}) => ({
    color: `${theme.palette.text.primary}`,
    '&.MuiFormLabel-root.Mui-focused': {
        color: `${theme.palette.text.primary}`,
    },
}));

