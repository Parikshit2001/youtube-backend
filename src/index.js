import dotenv from 'dotenv'
import connectToDB from './db/dbConnect.js'

dotenv.config({
    path: './.env'
})

connectToDB()