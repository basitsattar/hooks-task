/* eslint-disable */
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import { openRoutes, protectedRoutes, routes } from 'src/routes';
import { ToastContainer } from 'react-toastify';
import { messages, defaultLocale } from './locales';

const App = () => {
  const { token } = useSelector((state) => state.auth); 
  const routing = useRoutes(routes);
  const Openrouting = useRoutes(openRoutes);
  const protectingrouting = useRoutes(protectedRoutes);
  const [currentLocale] = useState(defaultLocale);

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        { token ? protectingrouting : Openrouting}
        {routing}
        <ToastContainer />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
