import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";

const AdCard = (props: PropsAdData) => {
  const { adData } = props;
  console.log("datat from card", adData);
  const { data: session } = useSession();

  console.log("user id ", session);

  const bookmarksHandler = async () => {
    const response = await fetch("/api/advertisement/bookmarks", {
      method: "POST",
      body: JSON.stringify({
        userId: session?.user.id,
        adData,
      }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <>
      <section className=" flex flex-col m-4 gap-2 border-2 rounded-md w-80 h-auto hover:border-orange-special  ">
        <Image
          src={adData.imgUrl[0]}
          width={320}
          height={150}
          alt="vehicle"
          className="rounded-md"
        />
        <div className="flex flex-col gap-2 m-4 ">
          <h2>$ {adData.price}</h2>

          <h1 className="text-gray-500">{adData.title}</h1>
          <p className="capitalize text-gray-500">{adData.brand}</p>
          <p className="text-gray-500">{adData.year}</p>

          <button onClick={bookmarksHandler}>
            <BookmarkIcon className="w-5 h-5 flex-shrink-0" />
          </button>
        </div>
      </section>
    </>
  );
};

export default AdCard;
