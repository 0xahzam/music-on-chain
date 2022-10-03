import type { NextPage } from 'next';
import Post from './Post'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsSpotify } from 'react-icons/bs';

const Home: NextPage = () => {
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

              <input value='https://open.spotify.com/track/6GD1eomgaGT1Epto' className='bg-white bg-opacity-10 px-3 py-2 outline-none rounded-md w-full mr-4 pl-16' type="text" />

              <button className="bg-white bg-opacity-10 px-5 py-2 flex items-center text-orange custom text-2xl rounded-md">Post</button>
            </div>
          </div>
        </div>

        {/* division */}
        <div className="flex mt-7 items-center">
          <div className='border-t w-full opacity-40'></div>
          <p className='whitespace-nowrap text-white mx-4 custom text-2xl opacity-50'>Live Feed</p>
          <div className='border-t w-full opacity-40'></div>
        </div>
      </div>
    </div>
  );
};


export default Home;
