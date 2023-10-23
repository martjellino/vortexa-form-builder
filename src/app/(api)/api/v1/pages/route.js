import { prisma } from "@/utils/prisma";
// import Joi from "joi";
import { NextResponse } from "next/server";

// Create Page
export async function POST(req) {
  try {
    const { questionTitle, description, type, config, choices, projectId } =
      await req.json();

    if (!questionTitle || !type || !config || !projectId) {
      return NextResponse.json(
        { error: `Please fill the mandatory columns` },
        { status: 400 }
      );
    }

    const createPage = await prisma.page.create({
      data: {
        questionTitle,
        description,
        type,
        config,
        choices,
        projectId,
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

// Remove Page
// export async function DELETE(req) {
//   try {
//     const id = req.params.id;
//     const page = await prisma.page.findUnique({
//       where: { id },
//     });
//     if (!page) {
//       return NextResponse.json(
//         { message: "The Page is not found!" },
//         { status: 404 }
//       );
//     }
//     await prisma.page.delete({ where: { id } });
//     return NextResponse.json(
//       { message: "Successfully Remove The Page" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ errorMessage: error.message }, { status: 500 });
//   }
// }
