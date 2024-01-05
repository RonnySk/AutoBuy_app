import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { inputData } = await req.json();

  try {
    await connectToDB();
    const searchedAd = await Advertisement.find({
      $or: [
        { model: inputData.model.toLowerCase() },
        { price: inputData.price },
        { brand: inputData.brand.toLowerCase() },
        { year: inputData.year },
      ],
    }).populate("creator");

    console.log("ad on db", searchedAd);

    return new Response(JSON.stringify(searchedAd), { status: 201 });
  } catch (error) {
    return new Response("Failed to get searched advertisement", {
      status: 500,
    });
  }
};
