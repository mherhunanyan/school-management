require('dotenv').config()
import startServer from './graphql/server'
import { createAdminUser } from './services'

startServer()
    .then(async () => { await createAdminUser(); })
    .catch((e) => { console.error(e); });