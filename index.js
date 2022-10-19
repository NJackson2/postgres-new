import express from 'express'
import pg from 'pg'
import { credentials } from './credentials.js'

const { Pool } = pg

const app = express()


app.get('/customers', async (req, res) => {
    const pool = new Pool(credentials)
    const customers = await pool.query("SELECT * FROM customers", )
        .catch(err => res.status(500).send(err))
    res.send(customers.rows)
    pool.end()
})


// some developers sent up a separate file for their routes (e.g., routes.js)

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))