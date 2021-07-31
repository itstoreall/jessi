import sprite from '../svg/sprite.svg';
import s from './Main.module.scss';

const { log } = console;

const PostAddInfo = () => {
  return (
    <div className={s.PostAddInfo}>
      <div className={s.btnWrap}>
        <button onClick={() => log('Click Read more')}>Read more</button>
      </div>

      <a href="/">
        <span>Fashion </span>
      </a>

      <a href="/">
        <span>Share </span>
        <svg>
          <use href={`${sprite}#share`}></use>
        </svg>
      </a>
    </div>
  );
};

export default PostAddInfo;
