import { Header } from './components';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import { RoutesApp } from './routes';
import { AppProvider } from 'hooks';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <RoutesApp />
          <ToastContainer />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
