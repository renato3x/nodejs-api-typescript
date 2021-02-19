import express, { json } from 'express'
import indexRoutes from './routes/index.routes'

//express instance
const app = express()

//body parser config
app.use(json())

//routes
app.use(indexRoutes)

//server init
app.listen(3000, () => {
  console.log('Server open in port 3000')
})