import * as React from "react";
import {ColorModeContext} from "../lib/ThemeContext";
import {FormControl} from "@mui/material";
import {Switch, FormLabel} from "../../../shared/styles/componnents";

export function ToggleThemeButton() {
    const colorMode = React.useContext(ColorModeContext);
    return (
        //todo merge with propstyles
        <FormControl sx={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <Switch id="mode" onChange={colorMode.toggleColorMode}/>
            <FormLabel htmlFor={'mode'}>Mode</FormLabel>
        </FormControl>
    )
}
