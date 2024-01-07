"use client";

import { getServerSideProps } from "next/dist/build/templates/pages";
import { useEffect, useState } from "react";

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

  return <div>{adData?.title}</div>;
};

export default AdDescription;
