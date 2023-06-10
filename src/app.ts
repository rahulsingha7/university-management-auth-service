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

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'
// import { UserRoutes } from './app/modules/user/user.route'
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
// eslint-disable-next-line no-console
console.log(process.env)
// app.use('/api/v1//users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)
app.use('/api/v1/', routes)
//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   // throw new ApiError(400, 'Ore baba error')
//   next('ore baba error')
// })
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error logger')
// })
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('unhandled promise rejection'))
// })
//global error handler
app.use(globalErrorHandler)

export default app
