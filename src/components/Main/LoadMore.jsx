import s from './Main.module.scss';

const { log } = console;

const LoadMore = () => {
  return (
    <section className={s.LoadMore}>
      <div className={s.LoadMoreBtnWrap}>
        <button
          className={s.LoadMoreBtn}
          onClick={() => log('Click Load more')}
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default LoadMore;
