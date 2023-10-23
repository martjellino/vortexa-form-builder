import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Get Page By ID
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const findPage = await prisma.page.findFirst({
      where: {
        id,
      },
    });

    if (!findPage) {
      return NextResponse.json(
        {
          message: "The page is not found!",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        data: findPage,
        message: "Successfully Get The Page",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}

// Update Page
export async function PATCH(req, { params }) {
  const body = await req.json();
  console.log(body);

  try {
    const findPage = await prisma.page.findFirst({
      where: {
        id: body.id,
      },
    });
    if (!findPage) {
      return NextResponse.json(
        {
          message: "The page is not found!",
        },
        {
          status: 404,
        }
      );
    }
    const updatePage = await prisma.page.update({
      where: { id: body.id },
      data: {
        questionTitle: body.questionTitle,
        description: body.description,
        type: body.type,
        config: body.config,
        choices: body.choices,
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
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
// export async function PATCH(req, { params }) {
//   const { id } = params;
//   const { questionTitle, description, type, config, choices } =
//     await req.json();
//   try {
//     const findPage = await prisma.page.findFirst({
//       where: {
//         id,
//       },
//     });
//     if (!findPage) {
//       return NextResponse.json(
//         {
//           message: "The page is not found!",
//         },
//         {
//           status: 404,
//         }
//       );
//     }
//     const updatePage = await prisma.page.update({
//       where: { id },
//       data: {
//         questionTitle,
//         description,
//         type,
//         config: JSON.stringify(config),
//         choices,
//       },
//     });
//     return NextResponse.json(
//       {
//         data: updatePage,
//         message: "Successfully Update The Page",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     return NextResponse.json({ errorMessage: error.message }, { status: 500 });
//   }
// }

// Remove Page
export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const findPage = await prisma.page.findFirst({
      where: {
        id,
      },
    });

    if (!findPage) {
      return NextResponse.json(
        {
          message: "The page is not found!",
        },
        {
          status: 404,
        }
      );
    }
    const deletePage = await prisma.page.delete({ where: { id } });
    return NextResponse.json(
      { data: deletePage, message: "Successfully Remove The Page" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
