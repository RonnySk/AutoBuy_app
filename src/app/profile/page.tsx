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
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-lg mb-6">
          Welcome <span className="font-bold">{session?.user?.name}</span>
        </h1>
        <div className="flex flex-col border-2 rounded-md ">
          <h2 className="text-lg pl-10 mt-4 underline underline-offset-4 decoration-orange-special">
            Your Bookmarks Vehicles
          </h2>
          <VehicleCardList adData={clientAds} />
        </div>
        <div className="flex flex-col border-2 rounded-md">
          <h2 className="text-lg pl-10 mt-4 underline underline-offset-4 decoration-orange-special">
            Your ads
          </h2>
          <VehicleCardList adData={clientAds} />
        </div>
      </section>
    </>
  );
};

export default Profile;
