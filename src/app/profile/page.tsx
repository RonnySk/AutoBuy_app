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
          userId: session?.user.id,
        }),
      });

      const data = await response.json();
      setClientAds(data);
    };

    fetchClientAds();
  }, []);
  console.log("ads state", clientAds);

  return (
    <section>
      <VehicleCardList adData={clientAds} />
    </section>
  );

  return (
    <>
      <div>profile</div>
    </>
  );
};

export default Profile;
