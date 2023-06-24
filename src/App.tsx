import { FC, ReactElement } from 'react'; // FC: return a function component and not return any functions, ReactElement uses class based constructor functions to generate components
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { DashBoard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  // This function would return a constructor function which React uses in turn to generate JSX React component
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <DashBoard />
    </ThemeProvider>
  );
};

export default App;
