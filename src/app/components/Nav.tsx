"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "../../../node_modules/next/image";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
//   const { data: session } = useSession();

//   const [providers, setProviders] = useState(null);
//   const [toggleDropdown, setToggleDropdown] = useState(false);

//   useEffect(() => {
//     const setUpProviders = async () => {
//       const response = await getProviders();

//       setProviders(response);
//     };

//     setUpProviders();
//   }, []);

  return (
    <nav className="flex justify-between w-full m-10 ">
      <Link href="/" className="flex gap-2 flex-center items-center">
        <Image
          src="/images/autobuy_logo.png"
          alt="Autobuy logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
        <button className="rounded-full bg-orange-special p-3 hover:bg-orange-special-light text-white">Log In</button>
        <button className="rounded-full border-2 border-orange-special p-3 hover:text-orange-special">Sign In</button>

        </div>
      </div>
{/* 
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}

      {/* Mobile Navigation */}
{/* 
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Nav;