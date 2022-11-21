import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Post from './Post'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsSpotify } from 'react-icons/bs';

const Home: NextPage = () => {
  let imgLink = 'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'

  const [desc, setDesc] = useState('')
  const [ search, setSearch ] = useState('')
  const [id, setId] = useState('')
  const [token, setToken ] = useState('') 
  const [posts, setPosts] = useState([
    {
      desc: 'hehehehee',
      img: imgLink,
      songLink: 'ok',
    },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const id = e.target.value
    const iditem = id.split("/")[4]
    const idmain = iditem.split("?")[0]
    setId(idmain)
    console.log(idmain);
  }

  const CLIENT_ID = '987150daf0054c7ca891b415d72b457f'
  const CLIENT_SECRET = '2e3a01bd93fe4e9b9fedc367a5185824'

  useEffect(() => {
    // ACCESS TOKEN
    var authParams  = {
      method: 'POST',
      headers:  {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }

    fetch(`https://accounts.spotify.com/api/token`, authParams)
      .then(res => res.json())
      .then(data => setToken(data.access_token))

  }, [])

  const getReq = async () => {

    var trackParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token 
      }
    }

  await fetch(`https://api.spotify.com/v1/tracks/${id}?market=ES` , trackParams)
    .then(resp => resp.json())
    .then(res => {
      // console.log(res);
      
      const newPost = {
        desc: desc,
        img: res.album.images[1].url,
        songLink: res.external_urls.spotify,
      } 

      setPosts([...posts, newPost])
      console.log(posts);
      
    }) 

}

  return (
    <div className='bg-black imag min-h-screen w-screen overflow-x-hidden flex justify-center items-start'>
      <div className='mt-10 w-2/5 flex flex-col z-10'>
      {/* upper area */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className='text-orange custom text-3xl'>Music on Chain</h1>
            <ConnectButton />
          </div>

          <div className="bg-white text-white bg-opacity-5 rounded-md p-5 mt-10 custom2 borderss">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet Lorem ipsum dolor elitsa.</p>

            <div className="flex justify-between items-stretch mt-4 relative">
              <BsSpotify className='absolute green text-3xl top-2 left-4' />

              <input value={search} onChange={handleChange} placeholder='https://open.spotify.com/track/6GD1eomgaGT1Epto' className='bg-white bg-opacity-10 px-3 py-2 outline-none rounded-md w-full mr-4 pl-16' type="text" />

              <button onClick={getReq} className="bg-white bg-opacity-10 px-5 py-2 flex items-center text-orange custom text-2xl rounded-md">Post</button>
            </div>
          </div>
        </div>

        {/* division */}
        <div className="flex mt-7 items-center">
          <div className='border-t w-full opacity-40'></div>
          <p className='whitespace-nowrap text-white mx-4 custom text-2xl opacity-50'>Live Feed</p>
          <div className='border-t w-full opacity-40'></div>
        </div>

        {/* Posts */}
        <Post posts ={posts} /> 
      </div>
    </div>
  );
};


export default Home;
