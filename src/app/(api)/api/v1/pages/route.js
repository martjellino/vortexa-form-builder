import { prisma } from '@/utils/prisma'
// import Joi from "joi";
import { NextResponse } from 'next/server'

// Get list of page
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const projectId = searchParams.get('projectId')

  if (!projectId) {
    return NextResponse.json(
      { errorMessage: 'Project ID is not correct' },
      { status: 500 },
    )
  }

  try {
    const findPages = await prisma.page.findMany({
      where: {
        projectId: projectId,
      },
      include: {
        _count: {
          select: { responses: true },
        },
      },
    })
    return NextResponse.json(
      {
        data: findPages,
        message: 'Successfully Get All Pages By Specific Project!',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}

// Create Page
export async function POST(req) {
  try {
    const {
      questionTitle,
      description,
      type,
      config,
      choices,
      projectId,
    } = await req.json()

    // if (!questionTitle || !type || !config || !projectId) {
    //   return NextResponse.json(
    //     { error: `Please fill the mandatory columns` },
    //     { status: 400 },
    //   )
    // }

    const createPage = await prisma.page.create({
      data: {
        questionTitle,
        description,
        type,
        config,
        choices,
        projectId,
      },
    })

    return NextResponse.json(
      {
        data: createPage,
        message: 'Successfully Create The Page',
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

export async function PUT(req) {
  const body = await req.json()
  if (!body) {
    return NextResponse.json(
      { errorMessage: 'Invalid request body' },
      { status: 400 },
    )
  }

  const returned = []

  body.map(async (data) => {
    const findPage = await prisma.page.findFirst({
      where: {
        id: data.id,
      },
    })

    if (!findPage) {
      return NextResponse.json({ message: 'Invalid ID' }, { status: 404 })
    }

    await prisma.page.update({
      where: { id: data.id },
      data: {
        questionTitle: data.questionTitle,
        description: data.description,
        type: data.type,
        config: data.config,
        choices: data.choices,
      },
    })
  })

  return NextResponse.json({
    message: 'update successfully',
  })
}
