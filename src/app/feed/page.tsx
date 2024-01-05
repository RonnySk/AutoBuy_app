"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import AdCard from "@src/app/components/AdCard";

// const PromptCardList = ({ adData }: Advertisement[]) => {
//   return (
//     <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
//       {adData.length !== 0
//         ? adData.map((ad: Advertisement) => <AdCard key={ad._id} adData={ad} />)
//         : null}
//     </div>
//   );
// };

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
