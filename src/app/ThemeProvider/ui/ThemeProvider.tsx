import {ReactNode} from 'react';
import * as React from "react";
import {ThemeProvider} from "@emotion/react";
import {ColorModeContext} from '../lib/ThemeContext';
import {getDesignTokens} from "../../../shared/styles/DesignTokens/getDesignTokens";
import {createTheme} from "@mui/material/styles";

export function ToggleColorMode({children}: {children:ReactNode}) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
