import { useState, useEffect, createContext, useContext } from 'react';

const COLOR_THEMES = { DARK: 'dark', LIGHT: 'light' };

const LOCAL_STORAGE_KEY = 'color-theme';

const ColorThemeContext = createContext(null);

export const ColorThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(COLOR_THEMES.LIGHT);

  useEffect(() => {
    if (
      window.localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark' ||
      (!(LOCAL_STORAGE_KEY in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme(COLOR_THEMES.DARK);
    } else {
      setTheme(COLOR_THEMES.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (theme === COLOR_THEMES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    if (!Object.values(COLOR_THEMES).includes(newTheme)) {
      throw new Error(`Invalid color theme: ${newTheme} provided, expected one of ${Object.values(newTheme)}`);
    }

    window.localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    setThemeState(newTheme);
  };

  const value = { theme, setTheme, COLOR_THEMES };

  return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
};

export const useColorTheme = () => {
  return useContext(ColorThemeContext);
};
