import express from 'express'
import pg from 'pg'
import { creds } from './creds.js'
import { getAllCustomers, getCustomerById } from './src/customers.js'


const app = express()

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getCustomerById)

app.listen(3030, () => console.log('Listening on http://localhost:3030...'))