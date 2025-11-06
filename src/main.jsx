import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/assets/index.css';
import App from '@/components/App';

import { DEFAULT_STALE } from '@/lib/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE,
      refetchOnWindowFocus: false,
      retry: 1,
      throwOnError: false,
      networkMode: 'online',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
