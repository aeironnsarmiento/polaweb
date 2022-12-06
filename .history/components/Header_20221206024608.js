import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://i.imgur.com/iKjNKhz.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://i.imgur.com/0CE7jHL.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div className="max-w-xs">
          <div className="mt-1 p-3 rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-10 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse text-white">
              5
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            className="navBtn"
            src={session.user?.image}
            alt="pfp"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
