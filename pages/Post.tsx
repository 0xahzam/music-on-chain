type Post = {
  posts: any;
  img: string;
  songLink: string;
  }

const Home: React.FC<Post> = (posts: Post) => {
  
  return (
    {
      posts.map((post: Post) => 
        <div>
          <img className="h-40 w-52" src={post.posts.img} />
          <h1 className='text-white'>{post.posts.desc}</h1>
          <p>{post.posts.songLink}</p>
        </div>
      
      )
    }

  );
};


export default Home;
