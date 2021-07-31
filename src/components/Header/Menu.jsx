import Container from '../Container';
import Nav from './Nav';
import sprite from '../svg/sprite.svg';
import s from './Header.module.scss';

const { log } = console;

const Menu = () => {
  return (
    <div className={s.Menu}>
      <Container>
        <div className={s.MenuContentWrap}>
          <div className={s.searchWrap}>
            <button className={s.searchBtn} onClick={() => log('search click')}>
              <svg>
                <use href={`${sprite}#search`}></use>
              </svg>
            </button>
          </div>

          <Nav />

          <div className={s.menuWrap}>
            <button onClick={() => log('cart click')}>
              <svg>
                <use href={`${sprite}#cart`}></use>
              </svg>
            </button>

            <button onClick={() => log('menu click')}>
              <svg>
                <use href={`${sprite}#menu`}></use>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
