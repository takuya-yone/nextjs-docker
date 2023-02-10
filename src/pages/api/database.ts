import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

type Data = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const count = await prisma.requestHistory.count();
  const count = await prisma.articles.count();
  console.log(count);
  res.status(200).json({ count: Number(count) });
}