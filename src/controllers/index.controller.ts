import { Request, Response } from 'express'

export default {
  index(request: Request, response: Response) {
    return response.json({
      message: 'Hello World'
    })
  }
}
