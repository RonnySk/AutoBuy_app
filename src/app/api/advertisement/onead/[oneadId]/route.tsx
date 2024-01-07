import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import { NextRequest, NextResponse } from "next/server";
import { convertToObject } from "typescript";

export const GET = async (
  req: NextRequest,
  { params }: { params: { oneadId: string | number } }
) => {
  console.log("connected to route", params);

  try {
    await connectToDB();
    const oneAd = await Advertisement.findById(params.oneadId).populate(
      "creator"
    );

    console.log(oneAd);

    return new Response(JSON.stringify(oneAd), { status: 201 });
  } catch (error) {
    return new Response("Failed to get all advertisement", {
      status: 500,
    });
  }
};
