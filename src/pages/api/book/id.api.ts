// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.bookId)

  if (bookId === 'undefined') {
    return res
      .status(401)
      .json({ Message: 'A book id has not been established' })
  }

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      avaliations: {
        select: {
          ratingNumber: true,
          User: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })

  if (!book) {
    return res.status(401).json({ Message: 'BookID not found' })
  } else {
    return res.json({ book })
  }
}
