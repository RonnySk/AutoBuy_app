import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { userId } = await req.json();
  try {
    await connectToDB();
    const allClientAd = await Advertisement.find({ creator: userId });

    return new Response(JSON.stringify(allClientAd), { status: 201 });
  } catch (error) {
    return new Response("Failed to get all client advertisement", {
      status: 500,
    });
  }
};
