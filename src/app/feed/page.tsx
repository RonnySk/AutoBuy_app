"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import AdCard from "@src/app/components/AdCard";
import VehicleCardList from "../components/VehicleCardList";

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
      <VehicleCardList adData={ads} />
    </section>
  );
};

export default Feed;
