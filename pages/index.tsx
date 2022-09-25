import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Eclipse from '../public/eclipses.png'

const Home: NextPage = () => {
  return (
    <div className='bg-black min-h-screen w-screen overflow-x-hidden relative flex justify-center items-start'>

      <div className="circle bg-green opacity-20 -top-40 left-40 "></div>
      <div className="circle bg-purple opacity-30 -bottom-40 -left-20"></div>
      <div className="circle bg-blue opacity-30 -top-40 -right-20"></div>

      <div className='mt-10 w-2/5'>
        <div className="flex items-center justify-between">
          <h1 className='text-orange custom text-3xl'>Music on Chain</h1>
          <ConnectButton />
        </div>

        <div className="bg-white text-white bg-opacity-10 rounded-md p-5 mt-10 custom2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet Lorem ipsum dolor elitsa.</p>

          <div className="flex justify-between items-stretch">

          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
