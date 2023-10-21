import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Get Project by ID
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const findProject = await prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!findProject) {
      return NextResponse.json(
        {
          message: "The project is not found!",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        data: findProject,
        message: "Successfully Get The Project",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Update Project
export async function PATCH(req, { params }) {
  const { id } = params;
  const { name } = await req.json();
  try {
    const findProject = await prisma.project.findFirst({
      where: {
        id,
      },
    });
    if (!findProject) {
      return NextResponse.json(
        {
          message: "The project is not found!",
        },
        {
          status: 404,
        }
      );
    }
    const updateProject = await prisma.project.update({
      where: { id },
      data: {
        name,
      },
    });
    return NextResponse.json(
      {
        data: updateProject,
        message: "Successfully Update The Project",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Remove Project
export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const findProject = await prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!findProject) {
      return NextResponse.json(
        {
          message: "The project is not found!",
        },
        {
          status: 404,
        }
      );
    }
    const deleteProject = await prisma.project.delete({ where: { id } });
    return NextResponse.json(
      { data: deleteProject, message: "Successfully Remove The Project" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
