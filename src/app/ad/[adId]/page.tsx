"use client";

const AdDescription = ({ params }: { params: { adId: string | number } }) => {
  return <div>AdDescription{params.adId}</div>;
};

export default AdDescription;
