import { useColorTheme } from '../../contexts/colorTheme';
import MoonIcon from '../../icons/moon.svg';
import SunIcon from '../../icons/sun.svg';

const LightThemeButton = () => {
  const { setTheme, COLOR_THEMES } = useColorTheme();
  return (
    <button
      onClick={() => setTheme(COLOR_THEMES.LIGHT)}
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <SunIcon className="w-5 h-5" />
    </button>
  );
};

const DarkThemeButton = () => {
  const { setTheme, COLOR_THEMES } = useColorTheme();
  return (
    <button
      onClick={() => setTheme(COLOR_THEMES.DARK)}
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <MoonIcon className="w-5 h-5" />
    </button>
  );
};

export const ColorThemeButton = () => {
  const { theme, COLOR_THEMES } = useColorTheme();
  if (theme === COLOR_THEMES.DARK) return <LightThemeButton />;
  return <DarkThemeButton />;
};
