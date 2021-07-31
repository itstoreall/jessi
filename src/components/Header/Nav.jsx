import app from '../../app.json';
import s from './Header.module.scss';

const Nav = () => {
  const { navLinks } = app.header;

  return (
    <nav className={s.Nav}>
      <ul className={s.NavList}>
        {navLinks.map(link => (
          <li key={link}>
            <a className={s.NavLink} href="/">
              {link.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
