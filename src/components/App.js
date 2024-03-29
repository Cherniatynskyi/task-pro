import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Restricted } from './Routes/Restricted';
import { Private } from './Routes/Private';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/authThunks';
import { NotFound } from '../pages/NotFound/NotFound.jsx';
import { Spinner } from '../components/Spinner/Spinner.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const ScreensPages = lazy(() =>
  import('../components/ScreensPage/ScreensPage')
);
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    // Робоча версія, підсля написання модулів реєстрації/аутентифікації додам Restricted та Private Routes. Якщо будемо використовувати лоадер також додам до Suspense. Іра
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<Restricted element={AuthPage} />} />
        <Route path="/home" element={<Private element={HomePage} />}>
          <Route path=":boardId" element={<ScreensPages />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Suspense>
  );
}

export default App;