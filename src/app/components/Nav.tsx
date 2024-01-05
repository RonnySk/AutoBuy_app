"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "@node_modules/next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
      router.push("/profile");
    };

    setUpProviders();
  }, [router]);

  return (
    <nav className="flex justify-between  m-10 ">
      <Link href="/" className="flex gap-2 flex-center items-center">
        <Image
          src="/assets/images/autobuy_logo.png"
          alt="Autobuy logo"
          width={150}
          height={150}
          className="object-contain"
          priority={false}
        />
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <Link
              href="/newvehicle"
              className="rounded-full bg-orange-special p-3 hover:bg-orange-special-light text-white"
            >
              Add new vehicle
            </Link>

            <Link href="/profile" className="btn">
              Profile
            </Link>

            <button
              type="button"
              onClick={() =>
                signOut({ redirect: false }).then(() => {
                  router.push("/");
                })
              }
              className="btn"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}

      {/* <div className="sm:hidden flex  mr-2">
        <Image
          src="/assets/images/lines.svg"
          width={30}
          height={30}
          className="rounded-full"
          alt="lines"
          onClick={() => setToggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <div className="dorpdown">
            {" "}
            <Link href="/profile" className="dropdown_link">
              My Profile
            </Link>
          </div>
        )}
      </div> */}
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
