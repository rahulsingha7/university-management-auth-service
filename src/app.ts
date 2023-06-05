/* eslint-disable no-undef */
import express, {
  Application,
  // NextFunction,
  // Request,
  // Response,
  // request,
  // response,
} from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
// eslint-disable-next-line no-console
console.log(process.env)
app.use('/api/users/', usersRouter)

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   // throw new ApiError(400, 'Ore baba error')
//   next('ore baba error')
// })
//global error handler
app.use(globalErrorHandler)

export default app
