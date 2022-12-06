import { getProviders, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
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
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-10">
          <img
            className="w-60 rounded-full"
            src={session?.user?.image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <div>
            <button
              className="p-3 bg-gray-800 rounded-lg text-white"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-2">
        <div className="mt-1 p-3 rounded-md">
          <input
            type="text"
            placeholder="Username"
            className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-1 p-3 rounded-md">
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-1 p-3 rounded-md">
          <input
            type="text"
            placeholder="Date of Birth"
            className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black"
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
