import 'source-map-support/register';
import * as express from 'express'
import { Request, Response } from 'express'
import * as serverless from 'serverless-http'

const app = express()

app.get('/hai', (req: Request, res: Response) => {
  res.status(200).json({
    code: 200,
    message: 'success'
  })
})

export const handler = serverless(app);
