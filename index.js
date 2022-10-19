import express from 'express'

import { getAllCustomers, getCustomerById, addNewCustomer } from './src/customers.js'

const app = express()
app.use(express.json())

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getCustomerById)
app.post('/customers', addNewCustomer)
// some developers sent up a separate file for their routes (e.g., routes.js)

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))