import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { adData, userId } = await req.json();
  console.log("post request", adData, userId);

  try {
    await connectToDB();
    const newAdvertisement = new Advertisement({
      creator: userId,
      model: inputData.model.toLowerCase(),
      title: inputData.title,
      price: inputData.price,
      brand: inputData.brand.toLowerCase(),
      year: inputData.year,
      description: inputData.description,
    });

    await newAdvertisement.save();

    return new Response(JSON.stringify(newAdvertisement), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new advertisement", {
      status: 500,
    });
  }
};
