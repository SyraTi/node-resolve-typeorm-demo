import { DataSource } from 'typeorm'
import path from 'path'
import process from 'process'
import { Subscription } from './entities/subscription'

const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: path.resolve(process.cwd(), './db.sqlite'),
  entities: [Subscription],
  synchronize: process.env.NODE_ENV === 'development',
})

export default AppDataSource
