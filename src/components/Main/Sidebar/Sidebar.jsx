// import SidebarWorld from '../../images/sidebar-shokunin-world-map-more-detail.png';
import SidebarAvatar from '../../images/sidebar-avatar.png';
import SidebarPopPost01 from '../../images/sidebar-popular-01.png';
import SidebarPopPost02 from '../../images/sidebar-popular-02.png';
import SidebarPopPost03 from '../../images/sidebar-popular-03.png';
import SidebarInstagram01 from '../../images/sidebar-instagram-01.jpg';
import SidebarInstagram02 from '../../images/sidebar-instagram-02.jpg';
import SidebarInstagram03 from '../../images/sidebar-instagram-03.jpg';
import SidebarInstagram04 from '../../images/sidebar-instagram-04.jpg';
import app from '../../../app.json';
import sprite from '../../svg/sprite.svg';
import s from './Sidebar.module.scss';

const popPostImages = { SidebarPopPost01, SidebarPopPost02, SidebarPopPost03 };
const instagramImages = {
  SidebarInstagram01,
  SidebarInstagram02,
  SidebarInstagram03,
  SidebarInstagram04,
};

const { log } = console;

const Sidebar = () => {
  const { socialIcons, popularPosts, categories, instagram } = app.sidebar;

  return (
    <aside className={s.Sidebar}>
      <div className={s.WhereWeAreNow}>
        <h3 className={s.title}>Where we are now?</h3>
        <div className={s.thumb}></div>
        <span className={s.location}>Las Vegas, Nevada, USA</span>
      </div>

      <div className={s.Hello}>
        <h3 className={s.HellotTitle}>Hello</h3>
        <img src={SidebarAvatar} alt="Jessica Stanley"></img>
        <span className={s.HelloName}>by Jessica Stanley</span>
        <p className={s.HelloText}>
          Proin eleifend lobortis purus nec mollis risus ndrerit. Aenean
          consequat in...
        </p>

        <div className={s.socialIconWrap}>
          {socialIcons.map(icon => (
            <a key={icon} className={s.socialIconBtn} href="/">
              <svg>
                <use href={`${sprite}${icon}`}></use>
              </svg>
            </a>
          ))}
        </div>

        <div className={s.TrendingPosts}>
          <h3 className={s.title}>Trending posts</h3>
          <div className={s.thumb}>
            <span>Perfect for New Daytime</span>
            <button onClick={() => log('Click Read more')}>Read more</button>
          </div>
        </div>

        <div className={s.PopularPosts}>
          <h3 className={s.PopularPostTitle}>Popular posts</h3>
          
          <ul className={s.PopularPostList}>
            {popularPosts.map(({ url, topic, date }) => (
              <li key={topic} className={s.PopularPostItem}>
                <a className={s.PopularPostLink} href={url}>
                  <div className={s.PopularPostThumb}>
                    <img src={popPostImages[url]} alt={topic}></img>
                  </div>

                  <div className={s.PopularPostTextWrap}>
                    <span className={s.PopularPostTopic}>{topic}</span>
                    <span className={s.PopularPostDate}>{date}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.Categories}>
          {categories.map(category => (
            <button
              key={category}
              className={s.CategoryBtn}
              onClick={() => log(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={s.Instagram}>
          <h3 className={s.InstagramTitle}>Instagram</h3>
          <div className={s.InstagramImageWrap}>
            {instagram.map(img => (
              <div key={img} className={s.InstagramThumb}>
                <img src={instagramImages[img]} alt={img}></img>
              </div>
            ))}
          </div>

          <div className={s.InstagramFollowMe}>
            <a className={s.InstagramFollowMeLink} href="/">
              <svg>
                <use href={`${sprite}#instagram`}></use>
              </svg>
              <span>follow&nbsp;me!</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
