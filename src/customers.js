import pg from 'pg'
import { creds } from '../creds.js'

const { Pool } = pg

export async function getAllCustomers (req, res) {
    const pool = new Pool(creds)
    const customers = await pool.query('SELECT * FROM customers')
        .catch(err => res.status(500).send(er))
    res.send(customers.rows)
    pool.end()
}

export async function getCustomerById (req, res) {
    const { customerId } = req.params
    const pool = new Pool(creds)
    const customers = await pool.query(`SELECT * FROM customers WHERE customerid=${customerId}`)
        .catch(err => res.status(500).send(err))
    res.send(customers.rows)
    pool.end()
}

export async function addNewCustomer(req, res) {
    const {firstName, lastName, phone, email} = req.body
    const pool = new Pool(creds)
    const query = `INSERT INTO customers (firstName, lastName, phone, email)
    VALUES ('${firstName}','${lastName}','${phone}','${email}')`
    console.log(query)
    await pool.query(query)
        .catch(err => res.status(500).send(err))
    res.status(201).send({message: 'Customer successfully created'})
    pool.end()
}