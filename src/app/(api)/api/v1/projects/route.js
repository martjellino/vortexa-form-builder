import { prisma } from "@/utils/prisma";

const { NextResponse } = require("next/server");


// Create Project
export async function POST(req) {
  try {
    const { name, authorId } = await req.json();
    
    if (!name) {
      return NextResponse.json({
        message: "Missing required data"
      }, {
        status: 400
      })
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



// Update Project
export async function PATCH(req) {
  try {
    const id = req.params.id;
    const { name } = await req.json();
    const project = await prisma.project.findUnique({
      where: {
        id,
      }
    });
    if (!project) {
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
        id,
        createdAt,
        updatedAt,
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
export async function DELETE(req) {
  try {
    const id = req.params.id;
    const project = await prisma.project.findUnique({
      where: { id },
    });
    if (!project) {
      return NextResponse.json(
        { message: "Project not found!" },
        { status: 404 }
      );
    }
    await prisma.project.delete({ where: { id } });
    return NextResponse.json(
      { message: "Successfully Remove The Project" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
