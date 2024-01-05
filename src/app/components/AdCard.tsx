import Image from "next/image";
import heartIcon from "../../../public/assets/images/heartIcon.svg";

const AdCard = (info: IMyProps) => {
  const { adData } = info;

  return (
    <>
      <section className="border-2">
        <h1>{adData.title}</h1>
        <h2>{adData.price}</h2>
        <p>{adData.brand}</p>
        <p>{adData.year}</p>
        <p>{adData.description}</p>
        <Image
          src={heartIcon}
          width={30}
          height={30}
          className="rounded-full"
          alt="lines"
          // onClick={() => setToggleDropdown((prev) => !prev)}
        />
      </section>
    </>
  );
};

export default AdCard;
