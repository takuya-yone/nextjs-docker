import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient as PrismaReader, articles } from 'src/lib/prisma';
import logger from 'src/lib/logger';

const prisma = new PrismaReader();

type Data = {
  message: articles[] | string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info(req);
  try {
    const articles = await prisma.articles.findMany();
    res.status(200).json({ message: articles });

    logger.info(res);
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err);
      res.status(503).json({ message: err.message });
    }
  }
}
