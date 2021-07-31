import Slider from './Slider';
import About from './About';
import Posts from './Posts';
import s from './Main.module.scss';

const Main = () => {
  return (
    <main className={s.Main}>
      <article className={s.article}>
        <Slider />
        <About />
        <Posts />
      </article>
    </main>
  );
};

export default Main;
