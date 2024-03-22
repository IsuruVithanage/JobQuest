import React from "react";
import logo from "../../assets/logoBlack.png"; // Import the image
import Man from "../../assets/bsMan.png"; // Import the image
import anny from "../../assets/annaliticsimg.png"; // Import the image
import conten from "../../assets/frontContent.png"; // Import the image

export default function Login() {
    return (
        <div className="flex h-screen">
            <div className="w-2/5" style={{ backgroundColor: '#e6e6f5' }}>
                <img src={logo} alt="logo" className='w-1/3 mt-4 ml-3'/>
                <img src={anny} alt="logo" className='w-1/6 mt-24 ml-20 absolute'/>
                <img src={conten} alt="logo" className='w-1/6 bottom-9 ml-96 absolute'/>
                <img src={Man} alt="logo" className='w-96 mx-auto block mt-52'/>
            </div>
            <div className="w-3/5 bg-white"></div>
        </div>
    );
}