import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider as AppThemeProvider } from './context/ThemeContext';
import App from './App';

const root = document.getElementById('root');

if (root !== null) {
  const appRoot = createRoot(root);

  appRoot.render(
    <StrictMode>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </StrictMode>
  );
}
