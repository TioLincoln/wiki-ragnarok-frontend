const common = {
  borderRadius: '8px',
  spacing: (factor) => `${factor * 8}px`,
};

export const darkTheme = {
  ...common,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#E50914',
    secondary: '#03DAC6',
    text: '#FFFFFF',
    textMuted: '#B3B3B3',
    border: '#2C2C2C',
    highlight: '#BB86FC',
  },
};

export const lightTheme = {
  ...common,
  colors: {
    background: '#FAFAFA',
    surface: '#FFFFFF',
    primary: '#E50914',
    secondary: '#0077cc',
    text: '#565656',
    textMuted: '#555555',
    border: '#dddddd',
    highlight: '#E50914',
  },
};
