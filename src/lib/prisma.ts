// それぞれのクライアントをインポート
import { PrismaClient as PrismaWriterClient } from 'prisma/generated/writer';
import { PrismaClient as PrismaReaderClient } from 'prisma/generated/reader';

export const PrismaWriter = new PrismaWriterClient();
export const PrismaReader = new PrismaReaderClient();
export * from 'prisma/generated/writer';
