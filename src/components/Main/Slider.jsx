import app from '../../app.json';
import sprite from '../svg/sprite.svg';
import s from './Main.module.scss';

const { log } = console;

const Slider = () => {
  const { socialIcons } = app.main.slider;

  return (
    <section className={s.Slider}>
      <div className={s.socialIcons}>
        <ul className={s.socialIconList}>
          {socialIcons.map(({ icon, url }) => (
            <li key={icon}>
              <a href={url}>
                <svg>
                  <use href={sprite + icon}></use>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button className={s.scroolBtn} onClick={() => log('click scrool')}>
        <span className={s.scrool}>Scrool</span>
        <svg>
          <use href={`${sprite}#arrow-down`}></use>
        </svg>
      </button>
    </section>
  );
};

export default Slider;
