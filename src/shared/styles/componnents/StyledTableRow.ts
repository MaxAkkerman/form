import {styled} from "@mui/material/styles";
import {TableRow} from "@mui/material";
import {TableRowProps} from "material-ui";

export const StyledTableRow = styled(TableRow)<TableRowProps>(({theme}) => ({
    border: 'none',
    background: `${theme.palette.background}`,
    cursor:'pointer',
    '&:hover': {
        backgroundColor: 'skyblue',
    }

}));
