"use client";

import { useEffect, useState } from "react";
import AdCard from "@src/app/components/AdCard";

const PromptCardList = (props: IMyProps) => {
  const { adData } = props;
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
      {adData.length !== 0
        ? adData.map((ad: Advertisement) => <AdCard key={ad._id} adData={ad} />)
        : null}
    </div>
  );
};

type Creator = {
  _id: number | string;
  email: string;
  username: string;
};

type Advertisement = Creator & {
  _id: number | string;
  model: string;
  title: string;
  price: number;
  brand: string;
  year: number;
  __v: number;
  description: string;
};
interface IMyProps {
  adData: Advertisement[];
}

const Feed = () => {
  const [ads, setAds] = useState<Advertisement[]>([]);
  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("/api/advertisement/all", {
        method: "GET",
      });
      const data = await response.json();
      setAds(data);
    };

    fetchAds();
  }, []);
  console.log("ads state", ads);

  return (
    <section>
      <PromptCardList adData={ads} />
    </section>
  );
};

export default Feed;
