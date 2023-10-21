import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Get Response By ID
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const response = await prisma.response.findFirst({
      where: {
        id,
      },
    });
    if (!response) {
      return NextResponse.json(
        { message: "Response is not found!" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        data: response,
        message: "Successfully Get The Response By ID",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
