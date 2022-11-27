import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { PostComponent } from '../components/Post';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsSpotify } from 'react-icons/bs';

export type Post = {
  text: string;
  imgSrc: string;
  songLink: string;
};

let imgLink =
'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60';

// const dummyPosts: Post[] = [];

const Home: NextPage = () => {

  const [desc, setDesc] = useState('');
  const [search, setSearch] = useState('');
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const id = e.target.value;
    if(id.length === 73){
      const iditem = id.split('/')[4];
      const idmain = iditem.split('?')[0];
      setId(idmain);
      console.log(idmain);
    }
    
  };

  const CLIENT_ID = '987150daf0054c7ca891b415d72b457f';
  const CLIENT_SECRET = '2e3a01bd93fe4e9b9fedc367a5185824';

  useEffect(() => {
    // ACCESS TOKEN
    var authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch(`https://accounts.spotify.com/api/token`, authParams)
      .then((res) => res.json())
      .then((data) => setToken(data.access_token));
  }, []);

  const getReq = async () => {
    var trackParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    await fetch(
      `https://api.spotify.com/v1/tracks/${id}?market=ES`,
      trackParams
    )
      .then((resp) => resp.json())
      .then((res) => {

        const newPost = [{
          text: desc,
          imgSrc: res.album.images[1].url,
          songLink: res.external_urls.spotify,
        }]

        // const hw = []
        // hw.push(newPost)
        setPosts(newPost, ...posts);

        setSearch('')
        setDesc('')
        setId('')
      });
  };

  return (
    <div className='bg-black imag min-h-screen w-screen overflow-x-hidden flex justify-center items-start'>
      <div className='mt-10 w-2/5 flex flex-col z-10'>
        {/* upper area */}
        <div>
          <div className='flex items-center justify-between'>
            <h1 className='text-orange custom text-3xl'>Music on Chain</h1>
            <ConnectButton />
          </div>

          <div className='bg-white text-white bg-opacity-5 rounded-md p-5 mt-10 custom2 borderss'>
            <textarea value={desc} onChange={e => setDesc(e.target.value)}  className='bg-transparent border-none outline-none w-full whitespace-normal resize-none' placeholder='Write the description...' />

            <div className='flex justify-between items-stretch mt-4 relative'>
              <BsSpotify className='absolute green text-3xl top-2 left-4' />

              <input
                value={search}
                onChange = {handleChange}
                placeholder='https://open.spotify.com/track/6GD1eomgaGT1Epto'
                className='bg-white bg-opacity-10 px-3 py-2 outline-none rounded-md w-full mr-4 pl-16'
                type='text'
              />

              <button
                onClick={getReq}
                className='bg-white bg-opacity-10 px-5 py-2 flex items-center text-orange custom text-2xl rounded-md'
              >
                Post
              </button>
            </div>
          </div>
        </div>

        {/* division */}
        <div className='flex mt-7 items-center'>
          <div className='border-t w-full opacity-40'></div>
          <p className='whitespace-nowrap text-white mx-4 custom text-2xl opacity-50'>
            Live Feed
          </p>
          <div className='border-t w-full opacity-40'></div>
        </div>

        {/* Posts */}
        <div className='flex flex-col gap-8'>
          {posts.map((post) => (
            <PostComponent post={post} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
