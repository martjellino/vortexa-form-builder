import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Get Response By ID
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const findResponse = await prisma.response.findFirst({
      where: {
        id,
      },
    });

    if (!findResponse) {
      return NextResponse.json(
        {
          message: "The response is not found!",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        data: findResponse,
        message: "Successfully Get The Response",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Remove Response
export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const findResponse = await prisma.response.findFirst({
      where: {
        id,
      },
    });

    if (!findResponse) {
      return NextResponse.json(
        {
          message: "The response is not found!",
        },
        {
          status: 404,
        }
      );
    }
    const deleteResponse = await prisma.response.delete({ where: { id } });
    return NextResponse.json(
      { data: deleteResponse, message: "Successfully Remove The Response" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
