import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { data } = await req.json();
  console.log("searche db", data);
  try {
    await connectToDB();
    const searchedAd = await Advertisement.find({
      $or: [
        { title: data.title },
        { price: data.price },
        { brand: data.brand },
        { year: data.year },
      ],
    }).populate("creator");

    console.log(searchedAd);

    return new Response(JSON.stringify(searchedAd), { status: 201 });
  } catch (error) {
    return new Response("Failed to get searched advertisement", {
      status: 500,
    });
  }
};
