import express, { Request, Response } from "express";
import next from "next";

var AWSXRay = require('aws-xray-sdk-core');
var xrayExpress = require('aws-xray-sdk-express');

// const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();


(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(xrayExpress.openSegment('webapp'));
    server.all("*", (req: Request, res: Response) => {
      var segment = AWSXRay.getSegment();
      segment.addAnnotation('nextjs', '*');
      return handle(req, res);
    });
    server.listen(port, () => {
      console.log(`Started Express Server at port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
})();