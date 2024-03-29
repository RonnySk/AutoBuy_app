"use client";

import Image from "@node_modules/next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Feed from "./feed/page";

const imageStyle = {
  width: "100%",
  height: "90%",
  borderRadius: "3%",
};

const Home = () => {
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
      setSearchedAds(data);
      if (response.ok) {
      }
    } catch (error) {}
  };

  return (
    <>
      <section>
        <div className="relative ">
          <Image
            src="/assets/images/base_img.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="cars and moto"
          />
          <div className="flex  flex-col my-6 gap-2 sm:absolute bottom-6 px-6 py-3 w-full  ">
            <h1 className="text-black sm:text-white  font-semibold text-4xl  ">
              Buy and sell <br /> your vehicle here!{" "}
            </h1>
            <p className="text-orange-special sm:text-gray-200">
              Find the best selection of new and used vehicles
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center h-auto  ">
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
      {searchedAds.length !== 0 ? (
        <Feed />
      ) : (
        <section className="flex flex-col sm:grid grid-rows-2 grid-flow-col gap-6  m-6 ">
          <a href="http://www.allianzdirect.de" target="_blank">
            <Image
              src="/assets/images/car.security2.jpg"
              width={0}
              height={0}
              sizes="50vw"
              style={imageStyle}
              alt="cars and moto"
            />
          </a>

          <a href="http://www.roadtripusa.com/" target="_blank">
            <Image
              src="/assets/images/road.jpg"
              width={0}
              height={0}
              sizes="50vw"
              style={imageStyle}
              alt="cars and moto"
            />
          </a>
          <a href="https://www.motorsport.com/" target="_blank">
            <Image
              src="/assets/images/car_cup2.png"
              width={0}
              height={0}
              sizes="50vw"
              style={imageStyle}
              alt="cars and moto"
            />
          </a>

          <a href="https://www.gasbuddy.com/home" target="_blank">
            <Image
              src="/assets/images/car_gasstation.jpg"
              width={0}
              height={0}
              sizes="50vw"
              style={imageStyle}
              alt="cars and moto"
            />
          </a>
        </section>
      )}
    </>
  );
};

export default Home;
