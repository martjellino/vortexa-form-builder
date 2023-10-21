import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// // Get Project by ID
// export async function GET(req) {
//   try {
//     const id = req.params.id;
//     const project = await prisma.project.findUnique({
//       where: {
//         id,
//       },
//     });

//     if (!project) {
//       return NextResponse.json(
//         {
//           message: "Project is not found!",
//         },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json(
//       {
//         data: project,
//         message: "Successfully Get The Project",
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ errorMessage: error.message }, { status: 500 });
//   }
// }

// Get Projects from Specific Author
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const projects = await prisma.project.findMany({
      where: {
        id,
      },
    });

    if (!projects) {
      return NextResponse.json(
        {
          data: {
            name: "~Tidak ada Project Yang Ada",
          },
          message: "Visitor is not found!",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: projects,
        message: "Successfully Get The Project",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: error.message }, { status: 500 });
  }
}
