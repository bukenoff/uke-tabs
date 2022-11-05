import * as Sentry from '@sentry/react';
import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store, persistor } from './redux/store';
import { initSentry } from './services/sentry';
import './i18n';
import './index.css';
import 'normalize.css';
import { Navigation } from './components/Navigation';

const TabsContainer = lazy(() => import('./containers/TabsContainer'));
const SongContainer = lazy(() => import('./containers/SongContainer'));
const DashboardContainer = lazy(
  () => import('./containers/DashboardContainer'),
);
const ChordsContainer = lazy(() => import('./containers/ChordsContainer'));
const AboutContainer = lazy(() => import('./containers/AboutContainer'));

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
            <Suspense fallback="..loading">
              <Routes>
                <Route path="/" element={<DashboardContainer />} />
                <Route path="/tabs" element={<TabsContainer />} />
                <Route path="/song/:id" element={<SongContainer />} />
                <Route path="/chords" element={<ChordsContainer />} />
                <Route path="/about" element={<AboutContainer />} />
              </Routes>
            </Suspense>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default Sentry.withProfiler(App);
