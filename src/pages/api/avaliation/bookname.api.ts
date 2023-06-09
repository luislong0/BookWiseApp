// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userBooksAvaliationSchema = z.object({
    userName: z.string(),
    query: z.string().optional(),
  })

  const { userName, query } = userBooksAvaliationSchema.parse(req.query)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (userName === 'undefined') {
    return res
      .status(401)
      .json({ Message: 'user name has not been established' })
  }

  if (userName !== 'undefined' && query !== 'undefined') {
    const book = await prisma.avaliation.findMany({
      where: {
        AND: [
          {
            userId: userName,
          },
          {
            OR: [
              {
                Book: {
                  author: {
                    contains: query,
                  },
                },
              },
              {
                Book: {
                  title: {
                    contains: query,
                  },
                },
              },
            ],
          },
        ],
      },
      include: {
        Book: {
          select: {
            title: true,
            author: true,
            imageUrl: true,
          },
        },
      },
    })

    if (!book) {
      return res.status(401).json({ Message: 'userName not found' })
    } else {
      return res.json({ book })
    }
  }
}
