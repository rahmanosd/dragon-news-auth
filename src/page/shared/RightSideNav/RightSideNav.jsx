import React from 'react';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import qZone1 from '../../../assets/assets/class.png';
import qZone2 from '../../../assets/assets/swimming.png';
import qZone3 from '../../../assets/assets/playground.png';
const RightSideNav = () => {
    return (
        <div>
            <div>
               <h2 className='font-poppins text-2xl font-semibold mb-4'>Login with</h2>
               <button className='flex btn btn-outline w-full mb-3'>
                <FaGoogle></FaGoogle>
                Login with Google
               </button>
               <button className='flex btn btn-outline w-full'>
                <FaGithub></FaGithub>
                Login with Github
               </button> 
            </div>
               <div className='mt-4'>
               <h2 className='font-poppins text-2xl font-semibold mb-4'>Find Us On</h2>
               <a className='flex p-4 text-lg gap-2 items-center border border-black rounded-t-lg' href="">
               <FaFacebook></FaFacebook>
                Facebook
               </a>
               <a className='flex p-4 text-lg gap-2 items-center border border-black' href="">
               <FaTwitter></FaTwitter>
                Facebook
               </a>
               <a className='flex p-4 text-lg gap-2 items-center border border-black' href="">
               <FaInstagram></FaInstagram>
                Insragram
               </a>
            </div>
            {/* Q Zone */}
               <div className='mt-5'>
                <h2 className='text-3xl font-poppins '>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               </div>
        </div>
    );
};

export default RightSideNav;