import {styled} from "@mui/material/styles";
import {TableRow} from "@mui/material";
import {TableRowProps} from "material-ui";

export const TableHeader = styled(TableRow)<TableRowProps>(({theme}) => ({
    background: `${theme.palette.text.secondary}`,
    cursor:'pointer',
}));
