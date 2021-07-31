import Container from '../Container';
import AboutMainPhoto from '../images/about-00.jpg';
import AboutInstagramPhoto01 from '../images/about-01-jonathan-borba.jpg';
import AboutInstagramPhoto02 from '../images/about-02-jonathan-borba.jpg';
import AboutInstagramPhoto03 from '../images/about-03-alexa-williams.jpg';
import app from '../../app.json';
import sprite from '../svg/sprite.svg';
import s from './Main.module.scss';

const instaPhotos = [
  { photo: AboutInstagramPhoto01, alt: 'about-photo01' },
  { photo: AboutInstagramPhoto02, alt: 'about-photo02' },
  { photo: AboutInstagramPhoto03, alt: 'about-photo03' },
];

const About = () => {
  const {
    label,
    description,
    callToAction: { text, url },
    alt,
  } = app.main.about;

  return (
    <section className={s.About}>
      <Container>
        <div className={s.AboutContentWrap}>
          <div className={s.AboutContent}>
            <span className={s.AboutLabel}>{label}</span>
            <div className={s.AboutContentTextWrap}>
              <h2 className={s.AboutTitle}>
                Welcome
                <br /> to My World
              </h2>
              <p className={s.AboutText}>{description}</p>
              <a className={s.beFirstBtn} href={url}>
                <span>{text}</span>
                <svg>
                  <use href={`${sprite}#arrow-right`}></use>
                </svg>
              </a>
            </div>
          </div>
          <div className={s.AboutThumb}>
            <img src={AboutMainPhoto} alt={alt}></img>
          </div>

          <div className={s.AboutInstagram}>
            {instaPhotos.map(({ photo, alt }) => (
              <div key={alt} className={s.AboutInstagramThumb}>
                <img src={photo} alt={alt}></img>
              </div>
            ))}

            <div className={s.AboutFollowMeWrap}>
              <div className={s.AboutFollowMe}>
                <a href="/">
                  <svg>
                    <use href={`${sprite}#instagram`}></use>
                  </svg>
                  <span>follow&nbsp;me!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
