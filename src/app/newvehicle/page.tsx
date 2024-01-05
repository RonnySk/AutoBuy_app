"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AdCard from "../components/AdCard";

const AddNewVehicle = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewVehicleFormValues>();
  const [newAnnouncement, setNewAnnouncement] =
    useState<NewVehicleFormValues>();

  const onHandleFormSubmit = async (inputData: NewVehicleFormValues) => {
    try {
      const response = await fetch("/api/advertisement/new", {
        method: "POST",
        body: JSON.stringify({
          inputData,
          userId: session?.user.id,
        }),
      });

      // const response = await fetch("/api/advertisement/new", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     title: inputData.title,
      //     model: inputData.model.toLocaleLowerCase(),
      //     price: inputData.price,
      //     brand: inputData.brand.toLocaleLowerCase(),
      //     year: inputData.year,
      //     description: inputData.description,
      //     userId: session?.user.id,
      //   }),
      // });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {}

    // setNewAnnouncement(data);
  };

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
            className="ipt "
          />
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            {...register("model")}
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
            className="ipt "
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
          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewVehicle;
