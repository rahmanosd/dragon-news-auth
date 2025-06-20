import React from 'react';
import logo from '../../../assets/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center p-2'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd,MMMM D,YYYY")}</p>
        </div>
    );
};

export default Header;