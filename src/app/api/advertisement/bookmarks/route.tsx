import { connectToDB } from "@utils/database";
import Advertisement from "@modelsadvertisement";
import User from "@models/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { adData, userId } = await req.json();
  console.log("post request", adData, userId);

  try {
    await connectToDB();

    const addToBookmarks = await User.findByIdAndUpdate(
      userId,
      {
        $push: { bookmarksad: adData._id },
      },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "Vehicle successfully added!" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response("Failed to create a new advertisement", {
      status: 500,
    });
  }
};
