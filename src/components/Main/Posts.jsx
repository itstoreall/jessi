import Container from '../Container';
import PostMain from './PostMain';
import PostAddInfo from './PostAddInfo';
import PostList from './PostList';
import LoadMore from './LoadMore';
import Sidebar from './Sidebar/Sidebar';
import s from './Main.module.scss';

const Posts = () => {
  return (
    <section className={s.Posts}>
      <Container>
        <div className={s.PostContentWrap}>
          <div className={s.PostFeed}>
            <PostMain />
            <PostAddInfo />
            <PostList />
            <LoadMore />
          </div>
          <Sidebar />
        </div>
      </Container>
    </section>
  );
};

export default Posts;
