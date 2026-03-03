import './App.css';
import AppPaths from './routes/paths';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('@pages/HomePage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={AppPaths.HOME} element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
