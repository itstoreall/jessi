import s from './Header.module.scss';

const Logo = () => {
  return (
    <div className={s.logoWrap}>
      <a className={s.Logo} href="/">
        Jessi
      </a>
    </div>
  );
};

export default Logo;
