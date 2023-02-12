import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie, getCookie, deleteCookie, hasCookie } from 'cookies-next';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

import logger from 'src/lib/logger';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info(req);
  const _hasCookie: boolean = hasCookie('sample_cookie', { req, res });

  if (_hasCookie) {
    const oldCookie: string | undefined = getCookie('sample_cookie', {
      req,
      res,
    })?.toString();
    deleteCookie('sample_cookie', { req, res });
    res.status(200).json({ message: 'Cookie Deleted：' + oldCookie });
    logger.info(res);
  } else {
    const uuid = uuidv4();
    const timestamp = new Date().toISOString();
    const sessionObj = {
      appName: 'nextjs_docker',
      uuid: uuid,
      timestamp: timestamp,
    };
    const encodedData = Buffer.from(JSON.stringify(sessionObj)).toString(
      'base64'
    );
    // const decodedData = Buffer.from(encodedData, 'base64').toString()

    setCookie('sample_cookie', encodedData, {
      req,
      res,
      maxAge: 60 * 60 * 24,
      httpOnly: true,
    });
    res.status(200).json({ message: 'Cookie Created!!!：' + encodedData });
    logger.info(res);
  }
}
