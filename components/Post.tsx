import { FC } from 'react';
import { Post } from '../pages';

interface PostProps {
  post: Post;
}

export const PostComponent: FC<PostProps> = ({ post }) => {
  return (
    <div className='flex justify-between bg-white bg-opacity-5 rounded-md mt-10 custom2 borderss overflow-hidden '>
      <div className="p-5 w-3/4">
        <p className='bg-white bg-opacity-10 text-white py-1 px-3 rounded-md text-sm inline'>0x8F9AS.....SFSDX</p>
        <h1 className='text-white mt-5 custom2 opacity-70'>{post.text}</h1>
      </div>
      <a target='blank' className='' href={post.songLink}>
        <img className='h-full w-full object-cover' src={post.imgSrc} />
      </a>
      
    </div>
  );
};
