import { getProviders, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Image from "next/image";
import React, { useRef, useState } from "react";
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
import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  const email = useRef(null);
  const date = useRef(null);

  const updateProfile = async () => {
    const docRef = await addDoc(collection(db, "user"), {
      username: session.user.username,
      email: email.current.value,
      date: date.current.value,
      timestamp: serverTimestamp(),
    });
  };

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

      <div className="flex flex-col items-center justify-center p-2">
        <div className="mt-1 p-3 rounded-md">
          <input
            type="text"
            placeholder="Email"
            ref={email}
            className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black hover:scale-125 transition-all duration-150 ease-out"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-2">
        <div className="mt-1 p-3 rounded-md">
          <input
            type="text"
            placeholder="Date of Birth"
            ref={date}
            className="bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black hover:scale-125 transition-all duration-150 ease-out"
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-5">
        <div>
          <button
            className="px-8 py-3 bg-gray-800 rounded-lg text-white"
            onClick={updateProfile}
          >
            Save
          </button>
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
