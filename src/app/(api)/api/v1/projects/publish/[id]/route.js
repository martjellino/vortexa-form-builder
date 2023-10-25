import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(req, { params }) {
  const { isPublished } = await req.json()
  const { id } = params

  try {
    const result = await prisma.project.findFirst({
      where: {
        id,
      },
    })

    if (!result) {
      return NextResponse.json({ errorMessage: 'Not found!' }, { status: 404 })
    }

    const updatedProject = await prisma.project.update({
      where: {
        id,
      },
      data: {
        isPublished,
      },
    })

    return NextResponse.json({
      message: 'Successfull update',
      data: updatedProject,
    })
  } catch (error) {
    return NextResponse.json({ errorMessage: error.message }, { status: 500 })
  }
}
