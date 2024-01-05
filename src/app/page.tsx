"use client";

import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "3%",
};

const Page2 = () => {
  const { data: session } = useSession();
  // const router = useRouter();
  const { register, handleSubmit } = useForm<SearchFormValues>();
  const [searchedAds, setSearchedAds] = useState<SearchFormValues[]>([]);

  const onHandleFormSubmit = async (inputData: SearchFormValues) => {
    try {
      const response = await fetch("/api/advertisement/searched", {
        method: "POST",
        body: JSON.stringify({
          inputData,
        }),
      });
      const data = await response.json();
      console.log("response from api", data);
      // setSearchedAds(data);
      if (response.ok) {
        // router.push("/");
      }
    } catch (error) {}

    // setNewAnnouncement(data);
  };

  return (
    <>
      <section>
        <div className="relative">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="cars and moto"
          />
          <div className="absolute bottom-8 px-6 py-3 w-full">
            <h1 className="text-white font-semibold text-4xl">
              Buy and sell <br /> your vehicle here!{" "}
            </h1>
            <p className="text-gray-200">
              Find the best selection of new and used vehicles
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center h-auto ">
        <form onSubmit={handleSubmit(onHandleFormSubmit)}>
          <div className="flex flex-col justify-items-center sm:flex-row justify-around border-2 rounded-lg mt-4 ">
            <input
              type="text"
              id="model"
              placeholder="Model"
              {...register("model")}
              className="ipt"
            />
            <input
              type="number"
              {...register("price")}
              id="price"
              placeholder="Price"
              className="ipt"
            />

            <input
              type="text"
              {...register("brand")}
              id="brand"
              placeholder="Brand"
              className="ipt"
            />
            <input
              type="number"
              {...register("year")}
              id="year"
              placeholder="Year"
              className="ipt"
            />

            <button className="btn m-2">Search</button>
          </div>
        </form>
      </section>
      <section className="flex flex-col sm:grid grid-rows-2 grid-flow-col gap-3 justify-items-center m-6 ">
        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="50vw"
            style={imageStyle}
            alt="cars and moto"
          />
        </Link>
      </section>
    </>
  );
};

export default Page2;
