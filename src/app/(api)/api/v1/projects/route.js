import { prisma } from '@/utils/prisma'
import { currentUser } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'

// Create Project
export async function POST(req) {
  try {
    const { name, authorId } = await req.json()

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
        name,
        authorId,
      },
    })

    await prisma.page.create({
      
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
