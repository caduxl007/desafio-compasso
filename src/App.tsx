import { Header } from './components';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
