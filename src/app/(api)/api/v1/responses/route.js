const { prisma } = require("@/utils/prisma");
const { NextResponse } = require("next/server");

// Create Response
export async function POST(req) {
  try {
    const { answer } = await req.json();
    const createResponse = await prisma.response.create({
      data: {
        id,
        createdAt,
        answer,
        pageId,
      },
    });
    return NextResponse.json(
      {
        data: createResponse,
        message: "Successfully Create The Response",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: error.message },
      { status: 500 }
    );
  }
}

// Get Responses (Project)
export async function GET(req) {
  try {
    const projectId = req.query.projectId;
    const responses = await prisma.response.findMany({
      where: {
        projectId,
      },
    });
    return NextResponse.json({
      data: responses,
      message: "Successfully Get The Response By Specific Project!"
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: error.message },
      { status: 500 }
    );
  }
}

// Remove Response
export async function DELETE(req) {
  try {
    const id = req.params.id;
    await prisma.response.delete({ where: { id } });
    return NextResponse.json({ message: "Successfully Remove The Response" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: error.message },
      { status: 500 }
    );
  }
}
