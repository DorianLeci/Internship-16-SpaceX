import { ThemeEnum, type Theme } from '@app-types/Theme';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { createContext, useCallback, useEffect, type ReactNode } from 'react';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'theme',
    initialValue: ThemeEnum.DARK,
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
