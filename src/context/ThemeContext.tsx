import React, { createContext, useContext, useState, useMemo } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextData {
  mode: ThemeMode;
  darkMode: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  toggleMode: (mode: ThemeMode) => void;
}

const lightColors = {
  primary: '#6200ee',
  background: '#f8f9fa',
  card: '#ffffff',
  text: '#212529',
  border: '#e9ecef',
  notification: '#ff3b30',
};

const darkColors = {
  primary: '#bb86fc',
  background: '#121212',
  card: '#1e1e1e',
  text: '#e9ecef',
  border: '#343a40',
  notification: '#cf6679',
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('system');

  const colorScheme = Appearance.getColorScheme();

  const darkMode = useMemo(() => {
    return mode === 'system' ? colorScheme === 'dark' : mode === 'dark';
  }, [mode, colorScheme]);

  const colors = darkMode ? darkColors : lightColors;

  const toggleMode = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, darkMode, colors, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};