"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";

const AddNewVehicle = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm<NewVehicleFormValues>();
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center p-6 border-2 rounded-lg m-6 sm: w-3/4 ">
          <div className="flex flex-col">
            <div className="flex flex-col items-center sm:flex-row">
              <input
                type="file"
                className="ipt w-4/5 h-1/2"
                onChange={handleFileChange}
              />

              <button
                className="btn w-40 "
                type="submit"
                onClick={handleSubmitImg}
              >
                Upload image
              </button>
            </div>

            {imgUrl.map((oneImgUrl: string) => (
              <>
                <div className="flex gap-2 mt-2 items-center" key={oneImgUrl}>
                  <Image
                    src={oneImgUrl}
                    width={150}
                    height={150}
                    alt="vehicle"
                  />
                  <button
                    className="flex btn  h-12 items-center"
                    onClick={() => {
                      setImgUrl(imgUrl.filter((a) => a !== oneImgUrl));
                    }}
                  >
                    Delete image
                  </button>
                </div>
              </>
            ))}
          </div>

          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit(onHandleFormSubmit)}
          >
            <div className="flex flex-col items-center sm:grid grid-cols-2  gap-2 justify-center items-center p-6">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  {...register("title")}
                  className="ipt "
                />
              </div>
              <div>
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  {...register("model")}
                  className="ipt"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  {...register("price")}
                  id="price"
                  className="ipt"
                />
              </div>
              <div>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  {...register("brand")}
                  id="brand"
                  className="ipt "
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  {...register("year")}
                  id="year"
                  className="ipt"
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  {...register("description")}
                  id="description"
                  className="ipt w-full"
                ></textarea>
              </div>
            </div>
            <button className="btn">Add new vehicle</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewVehicle;
