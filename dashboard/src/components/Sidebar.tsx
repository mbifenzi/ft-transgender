import React from 'react'
import Lottie from "react-lottie";
import animationData from "./assets/pong.json";
import { Link } from 'react-router-dom'
import {MdDashboard} from "react-icons/md"
import {VscAccount} from "react-icons/vsc"
import {BsGear} from "react-icons/bs"

function CoronaVirus() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
}
const User = {
  name: "John Doe",
  email: "test@gmail.com",
  avatar: "https://i.pravatar.cc/150?img=32",
  role: "Admin",
  status: "Active",
  lastLogin: "2 hours ago",
  createdAt: "12/12/2020",
  updatedAt: "12/12/2020",
};

// Tailwind Styles
const Wrapper = 'w-[300px] h-full bg-black backdrop-blur-[6px] bg-opacity-40 border-r-zinc-700 border-r-4 shadow-2xl text-white'
const buttons = "w-full flex flex-row items-center justify-center h-16 hover:bg-pink-500 text-xl transition duration-300 ease-in-out ";
const activeButton = "w-full flex flex-row items-center justify-center h-16 bg-pink-500 text-xl transition duration-300 ease-in-out ";
const logos = "flex flex-row justify-center items-center gap-3";
const Sidebar = () => {
  return (
    <div className={Wrapper}>
      <div className='flex flex-col h-full items-center w-full'>
        <div className='flex flex-col justify-start items-center pt-10'>
          <img src={`${User.avatar}`} alt="avatar" className='rounded-full'/>
          <h1>{`${User.name}`}</h1>
          <p>{`${User.email}`}</p>
        </div>
        <div className='w-4/5 pt-20 '>
        <ul className=''>
          <li className={buttons}>
            <Link to={"/dashboard"} className={logos}> <><MdDashboard/>Dashboard </></Link>
          </li>
          <li className={buttons}>
            <Link to={"/account"} className={logos}> <><VscAccount /> Account </></Link>
          </li>
          <li className={buttons}>
            <Link to={"/settings"} className={logos}> <><BsGear/> Settings </></Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar