import * as Sentry from '@sentry/react';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import ExampleContainer from './containers/ExampleContainer';
import { initSentry } from './services/sentry';
import './i18n';
import './index.css';

initSentry();

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExampleContainer />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Sentry.withProfiler(App);
