import { Header } from './components';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoutesApp } from './routes';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
