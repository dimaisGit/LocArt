import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import { THEME_NAMES } from "./constants/theme/names";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/themedGlobalStyles";
import DarkBackground from "./components/DarkBackground";
import LightBackground from "./components/LightBackground";
import Cursor from "./components/Cursor";

const App: React.FC = (): JSX.Element => {
	const [theme, setTheme] = useState<string>(THEME_NAMES.light);

	const handleToggleTheme = (): void => {
		if (theme === THEME_NAMES.light) {
			setTheme(THEME_NAMES.dark);
		} else {
			setTheme(THEME_NAMES.light);
		}
	};

	return (
		<ThemeProvider theme={theme === THEME_NAMES.light ? lightTheme : darkTheme}>
			<>
				<Cursor />
				<GlobalStyles />
				<LightBackground hide={theme !== THEME_NAMES.light} />
				<DarkBackground hide={theme !== THEME_NAMES.dark} />
				<Main theme={theme} handleToggleThemeCallback={handleToggleTheme} />
			</>
		</ThemeProvider>
	);
};

export default App;
