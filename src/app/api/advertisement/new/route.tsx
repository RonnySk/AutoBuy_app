import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { data, userId } = await req.json();
  console.log(data, userId);

  try {
    await connectToDB();
    const newAdvertisement = new Advertisement({
      creator: userId,
      model: data.model,
      title: data.title,
      price: data.price,
      brand: data.brand,
      year: data.year,
      description: data.description,
    });

    await newAdvertisement.save();

    return new Response(JSON.stringify(newAdvertisement), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new advertisement", {
      status: 500,
    });
  }
};
