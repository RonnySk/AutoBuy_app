"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AdCard from "../components/AdCard";
import axios from "axios";
import Image from "next/image";

const AddNewVehicle = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewVehicleFormValues>();
  // const [newAnnouncement, setNewAnnouncement] =
  //   useState<NewVehicleFormValues>();
  const [file, setFile] = useState<any>(null);
  const [filename, setFilename] = useState("");
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmitImg = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rsk-cloudinary");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/di623mwy5/image/upload",
        formData
      );
      setImgUrl([...imgUrl, response.data.url]);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("imgUrl", imgUrl);

  const onHandleFormSubmit = async (inputData: NewVehicleFormValues) => {
    try {
      const response = await fetch("/api/advertisement/new", {
        method: "POST",
        body: JSON.stringify({
          inputData,
          userId: session?.user.id,
          imgUrl,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {}
  };

  // console.log("novo veiculo", newAnnouncement);

  return (
    <>
      <div>
        <div>
          <input type="file" className="ipt" onChange={handleFileChange} />
          <label>{filename}</label>
        </div>
        <button className="btn" type="submit" onClick={handleSubmitImg}>
          Upload image
        </button>

        {imgUrl.map((oneImgUrl: string) => (
          <>
            <div className="add-photo-card" key={oneImgUrl}>
              <Image src={oneImgUrl} width={50} height={50} alt="vehicle" />
              <button
                onClick={() => {
                  setImgUrl(imgUrl.filter((a) => a !== oneImgUrl));
                }}
              >
                Delete image
              </button>
            </div>
          </>
        ))}

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

            <label htmlFor="img">Add Image</label>
            <input
              type="fild"
              {...register("img")}
              id="description"
              className="ipt"
            />
            <button className="btn">Add new vehicle</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewVehicle;
