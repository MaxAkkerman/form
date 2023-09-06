import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background,
        color: theme.palette.text,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
