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