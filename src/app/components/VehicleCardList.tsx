import AdCard from "./AdCard";

const VehicleCardList = (props: PropsArrAdData) => {
  const { adData } = props;

  return (
    <div className="flex flex-col sm:grid grid-col-3 grid-flow-col gap-3 justify-items-center m-6">
      {adData.length !== 0
        ? adData.map((ad: Advertisement) => <AdCard key={ad._id} adData={ad} />)
        : null}
    </div>
  );
};

export default VehicleCardList;
