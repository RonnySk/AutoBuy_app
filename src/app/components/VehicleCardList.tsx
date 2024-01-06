import AdCard from "./AdCard";

const VehicleCardList = (props: PropsArrAdData) => {
  const { adData } = props;

  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3 ">
      {adData.length !== 0
        ? adData.map((ad: Advertisement) => <AdCard key={ad._id} adData={ad} />)
        : null}
    </div>
  );
};

export default VehicleCardList;
