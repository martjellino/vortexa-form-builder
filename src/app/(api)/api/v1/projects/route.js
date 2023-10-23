import { prisma } from '@/utils/prisma'
import { currentUser } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'

// Create Project
export async function POST(req) {
  try {
    const { id, name, authorId } = await req.json()

    if (!name) {
      return NextResponse.json(
        {
          message: 'Please fill the mandatory columns',
        },
        {
          status: 400,
        },
      )
    }

    const createProject = await prisma.project.create({
      data: {
        id,
        name,
        authorId,
      },
    })

    const defaultConfig = {
      themes: {
        answer_color: '#DDDDD',
        background_color: '#FFFFFF',
        question_text_color: '#FFFFFF',
        description_text_color: '#F0F0F0',
      },
      layouts: 'col-6',
      is_image: false,
      image_url: 'testes.png',
      is_required: false,
    }
    const defaultChoices = {
      contents: {},
    }

    await prisma.page.create({
      data: {
        projectId: createProject.id,
        questionTitle: '',
        type: '',
        config: defaultConfig,
        choices: defaultChoices,
      },
    })

    return NextResponse.json(
      {
        data: createProject,
        message: 'Successfully Create The Project',
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}

// Get All Projects by Specific Author
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const authorId = searchParams.get('authorId')

  if (!authorId) {
    return NextResponse.json(
      { errorMessage: 'Author ID is not correct' },
      { status: 500 },
    )
  }

  try {
    const findProjects = await prisma.project.findMany({
      where: {
        authorId,
      },
    })
    return NextResponse.json(
      {
        data: findProjects,
        message: 'Successfully Get All Project By Specific Author!',
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}
