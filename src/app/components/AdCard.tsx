import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

const AdCard = (info: IMyProps) => {
  const { adData } = info;
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
      <section className="border-2">
        <h1>{adData.title}</h1>
        <h2>{adData.price}</h2>
        <p>{adData.brand}</p>
        <p>{adData.year}</p>
        <p>{adData.description}</p>

        <button onClick={bookmarksHandler}>
          <BookmarkIcon className="w-4 h-4 flex-shrink-0" />
        </button>
      </section>
    </>
  );
};

export default AdCard;
