"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import VehicleCardList from "../components/VehicleCardList";

const Profile = () => {
  const { data: session } = useSession();
  const [clientAds, setClientAds] = useState<Advertisement[]>([]);

  useEffect(() => {
    const fetchClientAds = async () => {
      const response = await fetch("/api/advertisement/allclientad", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
        }),
      });

      const data = await response.json();
      setClientAds(data);
    };

    fetchClientAds();
  }, [session?.user?.id]);
  console.log("ads state", clientAds);

  return (
    <>
      <section>
        <h2>Welcome {session?.user?.name}</h2>
        <h3>Your Ads</h3>
        <VehicleCardList adData={clientAds} />
      </section>
    </>
  );
};

export default Profile;
