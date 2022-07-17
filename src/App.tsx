import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store, persistor } from './redux/store';
import SongContainer from './containers/SongContainer';
import DashboardContainer from './containers/DashboardContainer';
import { initSentry } from './services/sentry';
import './i18n';
import './index.css';
import 'normalize.css';
import { Navigation } from './components/Navigation';

initSentry();

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <BrowserRouter>
          <main>
            <Navigation />
            <Routes>
              <Route path="/" element={<DashboardContainer />} />
              <Route path="/song/:id" element={<SongContainer />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default Sentry.withProfiler(App);
