// それぞれのクライアントをインポート
import { PrismaClient as PrismaWriterClient } from 'prisma/generated/writer';
import { PrismaClient as PrismaReaderClient } from 'prisma/generated/reader';
import { PrismaClient } from '@prisma/client';

// クライアント生成時の例
// export const clientX = new serviecB({
//   datasources: { db: { url: '{db_provider}://{db_url}/{table_name}' } },

export const PrismaWriter = new PrismaWriterClient();
export const PrismaReader = new PrismaReaderClient();
export * from 'prisma/generated/writer';
// export * from 'prisma/generated/reader';
