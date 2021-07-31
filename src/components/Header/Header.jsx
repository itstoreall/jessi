import s from './Header.module.scss';

const Header = ({ children }) => {
  return <header className={s.Header}>{children}</header>;
};

export default Header;
