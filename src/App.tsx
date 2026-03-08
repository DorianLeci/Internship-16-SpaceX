import ErrorFallback from '@components/ErrorFallback';
import Layout from '@components/Layout';
import { ThemeProvider } from '@context/ThemeContext';
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import AppPaths from './routes/paths';

const HomePage = lazy(() => import('@pages/HomePage'));
const LaunchesPage = lazy(() => import('@pages/LaunchesPage'));
const ShipsPage = lazy(() => import('@pages/ShipsPage'));
const LaunchDetailsPage = lazy(() => import('@pages/LaunchDetails'));
const ShipDetailsPage = lazy(() => import('@pages/ShipDetails'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

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
