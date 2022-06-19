import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import SongContainer from './containers/SongContainer';
import DashboardContainer from './containers/DashboardContainer';
import { initSentry } from './services/sentry';
import './i18n';
import './index.css';

initSentry();

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/song/:id" element={<SongContainer />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Sentry.withProfiler(App);
