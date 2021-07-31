import PostMainPhotoThumb from '../images/interior-00.jpg';
import app from '../../app.json';
import s from './Main.module.scss';

const PostMain = () => {
  const { label, postDate, title, timeReadMins, timeReadBy, text } =
    app.main.posts.mainPostMeta;

  return (
    <div className={s.PostMain}>
      <span className={s.PostLabel}>{label}</span>
      <div className={s.PostMainPhotoThumb}>
        <img src={PostMainPhotoThumb} alt="girl with a camera"></img>
      </div>

      <div className={s.PostMainMeta}>
        <span className={s.PostMainDate}>{postDate}</span>
        <h2 className={s.PostMainTitle}>{title}</h2>

        <p className={s.PostMainTimeRead}>
          {timeReadMins}
          <span className={s.splitter}>•</span>
          {timeReadBy}
        </p>

        <p className={s.PostMainText}>{text}</p>
      </div>
    </div>
  );
};

export default PostMain;
