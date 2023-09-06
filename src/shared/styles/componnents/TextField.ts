import {TextField as MuiTextField} from "@mui/material";
import {styled} from "@mui/material/styles";

export const TextField = styled(MuiTextField)(({theme}) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: `${theme.palette.text.secondary}`,
            },
            '&.Mui-focused fieldset': {
                borderColor: `${theme.palette.text.primary}`,
            }
        },
    }
));

