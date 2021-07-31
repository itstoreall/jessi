import PropTypes from 'prop-types';
import PostFashionImg01 from '../images/fashion-01-krishh.jpg';
import PostFashionImg02 from '../images/fashion-02-jakob-owens.jpg';
import PostFashionImg03 from '../images/fashion-03-alexa-williams.jpg';
import PostInteriorImg01 from '../images/interior-01-analise-benevides.jpg';
import PostInteriorImg02 from '../images/interior-02-wild-eucalyptus.jpg';
import PostInteriorImg03 from '../images/interior-03-jonathan-borba.jpg';
import PostLifestyleImg01 from '../images/lifeslyle-01-roberto-nickson.jpg';
import PostTravelImg01 from '../images/travel-01-artem-maltsev.jpg';
import sprite from '../svg/sprite.svg';
import s from './Main.module.scss';

const postImgs = {
  PostFashionImg01,
  PostFashionImg02,
  PostFashionImg03,
  PostInteriorImg01,
  PostInteriorImg02,
  PostInteriorImg03,
  PostLifestyleImg01,
  PostTravelImg01,
};

const { log } = console;

const PostItem = ({
  post: { label, url, postDate, title, timeReadMins, timeReadBy, text },
}) => {
  return (
    <li>
      <span className={s.PostLabel}>{label}</span>
      <div className={s.PostItemThumb}>
        <img src={postImgs[url]} alt={title}></img>
      </div>

      <div className={s.PostItemMeta}>
        <span className={s.PostDate}>{postDate}</span>
        <h2 className={s.PostItemTitle}>{title}</h2>
        <p className={s.PostTimeRead}>
          {timeReadMins}
          <span className={s.splitter}>•</span>
          {timeReadBy}
        </p>
        <p className={s.PostItemText}>{text}</p>
      </div>

      <button className={s.PostItemBtn} onClick={() => log(`Click ${title}`)}>
        <svg>
          <use href={`${sprite}#arrow-right-ios`}></use>
        </svg>
      </button>
    </li>
  );
};

PostItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PostItem;
