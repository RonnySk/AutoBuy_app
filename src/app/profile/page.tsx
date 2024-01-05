"use client";

import { useEffect, useState } from "react";
import VehicleCardList from "../components/VehicleCardList";

const Profile = () => {
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

  return (
    <>
      <div>profile</div>
    </>
  );
};

export default Profile;
