import React from 'react';
import {LogBox} from 'react-native';
import AppNavigator from './src/navigation';

import {I18nextProvider} from 'react-i18next';
import i18n from 'src/i18n';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <AppNavigator />
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
