import { FC } from 'react';
import { Post } from '../pages';

interface PostProps {
  post: Post;
}

export const PostComponent: FC<PostProps> = ({ post }) => {
  return (
    <div>
      <img className='h-40 w-52' src={post.imgSrc} />
      <h1 className='text-white'>{post.text}</h1>
      <a href={post.songLink} className='text-white underline'>
        {post.songLink}
      </a>
    </div>
  );
};
