import AppPaths from './routes/paths';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import { lazy } from 'react';
import { ThemeProvider } from '@context/ThemeContext';
import LaunchesPage from '@pages/LaunchesPage';
import LaunchDetailsPageWrapper from '@pages/LaunchDetails/DetailsWrapper';
import NotFoundPage from '@pages/NotFoundPage';
import ShipsPage from '@pages/ShipsPage';

const HomePage = lazy(() => import('@pages/HomePage'));

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path={AppPaths.HOME} element={<HomePage />} />
          <Route path={AppPaths.LAUNCHES} element={<LaunchesPage />} />
          <Route
            path={AppPaths.LAUNCH_DETAILS}
            element={<LaunchDetailsPageWrapper />}
          />
          <Route path={AppPaths.SHIPS} element={<ShipsPage />} />
          <Route path={AppPaths.UNKNOWN} element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
