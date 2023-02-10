import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, articles } from '@prisma/client'
const prisma = new PrismaClient()

type Data = {
  record: articles[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const count = await prisma.requestHistory.count();
  const articles = await prisma.articles.findMany();
  console.log();
  res.status(200).json({ record: articles });
}