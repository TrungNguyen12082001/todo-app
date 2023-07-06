import { FC, ReactElement } from 'react'; // FC: return a function component and not return any functions, ReactElement uses class based constructor functions to generate components
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import { DashBoard } from './pages/dashboard/dashboard';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

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
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <DashBoard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
