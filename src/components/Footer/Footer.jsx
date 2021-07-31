import { useState } from 'react';
import Container from '../Container';
import app from '../../app.json';
import sprite from '../svg/sprite.svg';
import s from './Footer.module.scss';

const { log } = console;

const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const { navLinks, socialLinks } = app.footer;

  const handleInputForm = e =>
    inputValue !== null && setInputValue(e.target.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    log('Email:', inputValue);
    setInputValue('');
  };

  return (
    <footer className={s.Footer} onSubmit={handleSubmitForm}>
      <Container>
        <div className={s.FooterContentWrap}>
          <div className={s.subscriptionWrap}>
            <b className={s.FooterTitle}>It Just Got Personal</b>
            <p className={s.FooterText}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>

            <form className={s.FooterForm}>
              <input
                className={s.FooterInput}
                value={inputValue}
                onChange={handleInputForm}
                type="email"
                placeholder="Your Email here"
              ></input>

              <button className={s.FooterFormBtn} type="submit">
                <svg>
                  <use href={`${sprite}#send`}></use>
                </svg>
              </button>
            </form>
          </div>
          <div className={s.FooterMenulWrap}>
            <div className={s.FooterLogoWrap}>
              <a className={s.FooterLogo} href="/">
                Jessi
              </a>
            </div>
            <span className={s.FooterSubtitle}>Personal blog</span>
            <nav className={s.FooterNav}>
              <ul className={s.FooterNavList}>
                {navLinks.map(link => (
                  <li className={s.FooterNavItem} key={link}>
                    <a className={s.FooterNavLink} href="/">
                      {link.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className={s.FooterSocialList}>
              {socialLinks.map(({ icon, url }) => (
                <li key={icon} className={s.FooterSocialItem}>
                  <a className={s.FooterSocialLink} href={url}>
                    <svg>
                      <use href={`${sprite}#${icon}`}></use>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <span className={s.copyright}>
              &#169; 2021 <span>Jessi</span>
            </span>
          </div>
        </div>

        <button className={s.goUp}>
          <svg>
            <use href={`${sprite}#arrow-up`}></use>
          </svg>
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
