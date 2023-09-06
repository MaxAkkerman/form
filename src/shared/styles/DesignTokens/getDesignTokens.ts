import {PaletteMode, ThemeOptions} from "@mui/material";
import {grey} from "@mui/material/colors";
export const getDesignTokens = (mode: PaletteMode):ThemeOptions => ({
    // @ts-ignore
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                background: grey[50],
                text: {
                    primary: grey[900],
                    secondary: grey[300]
                },
            }
            : {
                // palette values for dark mode
                background: grey[900],
                text: {
                    primary: grey[300],
                    secondary: grey[800]
                },
            }),

    }
});
