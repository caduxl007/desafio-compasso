import { FiChevronLeft, FiClock, FiGithub } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles.scss';

export function Header() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link">
          <FiGithub size={45} />
        </Link>

        {isHome ? (
          <Link to="/recents" className="header__link">
            <FiClock />
            Recentes
          </Link>
        ) : (
          <Link to="/" className="header__link">
            <FiChevronLeft />
            Voltar
          </Link>
        )}
      </nav>
    </header>
  );
}
