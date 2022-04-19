import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'reflect-metadata'
import { router } from './routes'

import './database'

const PORT = 3003

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
