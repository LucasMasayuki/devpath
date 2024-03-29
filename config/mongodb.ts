import { Db, MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
const dbName = process.env.MONGODB_DB

let cachedClient: MongoClient
let cachedDb: Db

function hasCorrectlyEnv(): void {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
  }

  if (!dbName) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local')
  }
}

const connectToDatabase = async (): Promise<{
  client: MongoClient
  db: Db
}> => {
  hasCorrectlyEnv()
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}

export default connectToDatabase
