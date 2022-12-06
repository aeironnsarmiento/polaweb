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

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-col items-center p-10">
          <img
            className="w-60 rounded-full"
            src={session?.user?.image}
            alt=""
          />
        </div>
        <div className="mt-30">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-gray-800 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
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
