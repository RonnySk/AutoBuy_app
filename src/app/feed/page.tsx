"use client";

import { useEffect, useState } from "react";

type Advertisement = {
  title: string;
  price: number;
  brand: string;
  year: number;
  description: string;
};

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

  return <div>Feed</div>;
};

export default Feed;
