import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectToDB();
    const allAd = await Advertisement.find({}).populate("creator");

    console.log(allAd);

    return new Response(JSON.stringify(allAd), { status: 201 });
  } catch (error) {
    return new Response("Failed to get all advertisement", {
      status: 500,
    });
  }
};
