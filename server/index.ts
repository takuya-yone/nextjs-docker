import express, { Request, Response } from "express";
import next from "next";

// const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, () => {
      console.log(`Started Express Server at port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
})();