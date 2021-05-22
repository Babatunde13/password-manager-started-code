import faunadb, {query as q} from 'faunadb'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const client = new faunadb.Client({secret: process.env.REACT_APP_FAUNA_KEY})
