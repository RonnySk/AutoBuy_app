type Creator = {
  _id: number | string;
  email: string;
  username: string;
};

type Advertisement = Creator & {
  _id: number | string;
  model: string;
  title: string;
  price: number;
  brand: string;
  year: number;
  __v: number;
  description: string;
};

interface IMyProps {
  adData: Advertisement;
}

const AdCard = (info: IMyProps) => {
  const { adData } = info;

  return (
    <>
      <section>
        <h1>{adData.title}</h1>
        <h2>{adData.price}</h2>
        <p>{adData.brand}</p>
        <p>{adData.year}</p>
        <p>{adData.description}</p>
      </section>
      ;
    </>
  );
};

export default AdCard;
