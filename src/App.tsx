import AppPaths from './routes/paths';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import { lazy } from 'react';
import { ThemeProvider } from '@context/ThemeContext';
import NotFoundPage from '@pages/NotFoundPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';
import LaunchDetailsPage from '@pages/LaunchDetails';
import ShipDetailsPage from '@pages/ShipDetails';

const HomePage = lazy(() => import('@pages/HomePage'));
const LaunchesPage = lazy(() => import('@pages/LaunchesPage'));
const ShipsPage = lazy(() => import('@pages/ShipsPage'));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => console.error('Global Error:', error, info)}
      >
        <Layout>
          <Routes>
            <Route path={AppPaths.HOME} element={<HomePage />} />
            <Route path={AppPaths.LAUNCHES} element={<LaunchesPage />} />
            <Route
              path={AppPaths.LAUNCH_DETAILS}
              element={<LaunchDetailsPage />}
            />
            <Route path={AppPaths.SHIP_DETAILS} element={<ShipDetailsPage />} />
            <Route path={AppPaths.SHIPS} element={<ShipsPage />} />
            <Route path={AppPaths.UNKNOWN} element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
