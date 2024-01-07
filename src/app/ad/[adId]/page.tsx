"use client";

import { getServerSideProps } from "next/dist/build/templates/pages";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {
  CalendarDaysIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const AdDescription = ({ params }: { params: { adId: string | number } }) => {
  const [adData, setAdData] = useState<Advertisement>();

  useEffect(() => {
    const fetchOneAd = async () => {
      const response = await fetch(`/api/advertisement/onead/${params.adId}`);
      const data = await response.json();
      setAdData(data);
    };

    fetchOneAd();
  }, [params.adId]);

  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="flex flex-col m-4 gap-2 border-2 rounded-md w-3/4 h-auto p-6 ">
          <div className="flex justify-center ">
            <Carousel className="w-3/4 h-1/2 sm:w-1/2">
              {adData?.imgUrl.map((oneImgUrl: string) => (
                <>
                  <div className="flex gap-2 mt-2 items-center" key={oneImgUrl}>
                    <Image
                      src={oneImgUrl}
                      width={150}
                      height={150}
                      alt="vehicle"
                    />
                  </div>
                </>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-4  sm:w-3/4 ">
            <h1 className="text-lg font-bold">{adData?.title}</h1>
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
              <h2>
                <span className="font-bold">$</span> {adData?.price}
              </h2>
              <p className=" capitalize">
                <span className="font-bold">Brand:</span> {adData?.brand}
              </p>
              <div className="flex gap-2 items-center">
                <CalendarDaysIcon className="w-5 h-5 flex-shrink-0" />
                <p>{adData?.year}</p>
              </div>
            </div>
            <p className="font-bold">Description</p>
            <p>{adData?.description} </p>
            <div className="flex gap-2 items-center">
              <MapPinIcon className="w-5 h-5 flex-shrink-0" />
              <p>{adData?.year}</p>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneArrowUpRightIcon className="w-5 h-5 flex-shrink-0" />
              <p>{adData?.year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdDescription;
