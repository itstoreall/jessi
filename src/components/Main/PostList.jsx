import PostItem from './PostItem';
import app from '../../app.json';
import s from './Main.module.scss';

const PostList = () => {
  const { postList } = app.main.posts;

  return (
    <div className={s.PostListWrap}>
      <ul className={s.PostList}>
        {postList.map(post => (
          <PostItem key={post.title} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
