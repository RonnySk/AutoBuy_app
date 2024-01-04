"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  title: string;
  price: number;
  brand: string;
  year: number;
  description: string;
};

const AddNewVehicle = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [newAnnouncement, setNewAnnouncement] = useState<FormValues>();

  function onHandleFormSubmit(data: FormValues) {
    setNewAnnouncement(data);
  }
  console.log("novo veiculo", newAnnouncement);

  return (
    <>
      <form
        className="flex justify-center items-center p-6"
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="flex flex-col justify-center items-center p-6 border-2 rounded-lg mt-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="ipt"
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            {...register("price")}
            id="price"
            className="ipt"
          />
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            {...register("brand")}
            id="brand"
            className="ipt"
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            {...register("year")}
            id="year"
            className="ipt"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            {...register("description")}
            id="description"
            className="ipt"
          />
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewVehicle;
