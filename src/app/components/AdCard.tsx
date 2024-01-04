type Creator = {
  _id: number | string;
  email: string;
  username: string;
};

type Advertisement = Creator & {
  _id: number | string;
  title: string;
  price: number;
  brand: string;
  year: number;
  __v: number;
  description: string;
};

interface IMyProps {
  info: Advertisement;
}

const AdCard = (info: IMyProps) => {
  return <div>AdCard</div>;
};

export default AdCard;
