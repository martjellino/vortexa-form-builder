import { prisma } from "@/utils/prisma";
// import Joi from "joi";
import { NextResponse } from "next/server";

// function validatePageInput(data) {
//   const pageSchema = Joi.object({
//     questionTitle: Joi.string().required().min(1).max(100),
//     description: Joi.string().min(0).max(100),
//     type: Joi.string().required().min(1).max(100),
//     config: Joi.any().required(),
//     choices: Joi.any(),
//     projectId: Joi.string().required(),
//   });

//   const { error } = pageSchema.validate(data);
//   return error;
// }

// Create Page
export async function POST(req) {
  try {
    const { questionTitle, description, type, config, choices } =
      await req.json();
    // const validationError = validatePageInput({
    //   questionTitle,
    //   description,
    //   type,
    //   config,
    //   choices,
    // });

    // if (validationError) {
    //   return NextResponse.json(
    //     { error: validationError.details.map((err) => err.message) },
    //     { status: 400 }
    //   );
    // }

    if (!questionTitle || !type || !!config || !projectId) {
      return NextResponse.json(
        { error: `Please fill the mandatory columns` },
        { status: 400 }
      );
    }

    const createPage = await prisma.page.create({
      data: {
        id,
        createdAt,
        updatedAt,
        questionTitle,
        description,
        type,
        config,
        choices,
        projectId,
        // projectId: { connect: { id: project.id } },
      },
    });
    return NextResponse.json(
      {
        data: createPage,
        message: "Successfully Create The Page",
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

// Get Page By ID
export async function GET(req) {
  try {
    const id = req.params.id;
    const page = await prisma.page.findUniqueOrThrow({
      where: {
        id,
      },
    });

    if (!page) {
      return NextResponse.json(
        {
          message: "Product is not found!",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        data: page,
        message: "Successfully Get The Page",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Update Page
export async function PATCH(req) {
  try {
    const id = req.params.id;
    const { questionTitle, description, type, config, choices, projectId } =
      await req.json();
    const page = await prisma.page.findUnique({
      where: { id },
    });
    if (!page) {
      return NextResponse.json(
        {
          message: "Product is not found!",
        },
        { status: 404 }
      );
    }
    const updatePage = await prisma.page.update({
      where: { id },
      data: {
        id,
        questionTitle,
        description,
        type,
        config,
        choices,
      },
    });
    return NextResponse.json(
      {
        data: updatePage,
        message: "Successfully Update The Page",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Remove Page
export async function DELETE(req) {
  try {
    const id = req.params.id;
    const page = await prisma.page.findUnique({
      where: { id },
    });
    if (!page) {
      return NextResponse.json(
        { message: "The Page is not found!" },
        { status: 404 }
      );
    }
    await prisma.page.delete({ where: { id } });
    return NextResponse.json(
      { message: "Successfully Remove The Page" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
