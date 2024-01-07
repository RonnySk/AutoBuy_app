import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { inputData, userId, imgUrl } = await req.json();
  console.log("post request", inputData, userId, imgUrl);

  try {
    await connectToDB();
    const newAdvertisement = new Advertisement({
      creator: userId,
      model: inputData.model.toLowerCase(),
      title: inputData.title,
      price: inputData.price,
      brand: inputData.brand.toLowerCase(),
      year: inputData.year,
      adress: inputData.adress,
      phone: inputData.phone,
      description: inputData.description,
      imgUrl: imgUrl,
    });

    await newAdvertisement.save();

    return new Response(JSON.stringify(newAdvertisement), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new advertisement", {
      status: 500,
    });
  }
};
