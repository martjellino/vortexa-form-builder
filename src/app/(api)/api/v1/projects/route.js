import { prisma } from "@/utils/prisma";

const { NextResponse } = require("next/server");

// Create Project
export async function POST(req) {
  try {
    const { name, authorId } = await req.json();

    if (!name) {
      return NextResponse.json(
        {
          message: "Please fill the mandatory columns",
        },
        {
          status: 400,
        }
      );
    }

    const createProject = await prisma.project.create({
      data: {
        name,
        authorId,
      },
    });
    return NextResponse.json(
      {
        data: createProject,
        message: "Successfully Create The Project",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Get All Projects by Specific Author
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const authorId = searchParams.get("authorId");

  if (!authorId) {
    return NextResponse.json(
      { errorMessage: "Author ID is not correct" },
      { status: 500 }
    );
  }

  try {
    const findProjects = await prisma.project.findMany({
      where: {
        authorId,
      },
    });
    return NextResponse.json(
      {
        data: findProjects,
        message: "Successfully Get All Response By Specific Project!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
