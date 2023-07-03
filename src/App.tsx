import { FC, ReactElement } from 'react'; // FC: return a function component and not return any functions, ReactElement uses class based constructor functions to generate components
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { DashBoard } from './pages/dashboard/dashboard';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  // This function would return a constructor function which React uses in turn to generate JSX React component
  // set ReactQueryDevtools with initialIsOpen = false means open the React query dev tools in a minimized state.
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <DashBoard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
