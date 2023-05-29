import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database is connected Successfully`)
    app.listen(config.port, () => {
      console.log(`Application listening on Port ${config.port}`)
    })
  } catch (error) {
    console.log(`Failed to connect to server`, error)
  }
}
main()
