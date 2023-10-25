const { prisma } = require('@/utils/prisma')
const { NextResponse } = require('next/server')

// Create Response
export async function POST(req) {
  try {
    const { answer, pageId } = await req.json()

    if (!answer) {
      return NextResponse.json(
        {
          message: 'Please fill the mandatory columns',
        },
        {
          status: 400,
        },
      )
    }

    const createResponse = await prisma.response.create({
      data: {
        answer: answer,
        pageId,
      },
    })
    return NextResponse.json(
      {
        data: createResponse,
        message: 'Successfully Create The Response',
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}

// Get All Responses by Specific Page
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const pageId = searchParams.get('pageId')

  if (!pageId) {
    return NextResponse.json(
      { errorMessage: 'Page ID is not correct' },
      { status: 500 },
    )
  }

  try {
    const findResponses = await prisma.response.findMany({
      where: {
        pageId,
      },
    })
    return NextResponse.json(
      {
        data: findResponses,
        message: 'Successfully Get All Responses By Specific Page!',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}
