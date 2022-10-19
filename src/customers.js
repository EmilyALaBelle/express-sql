async (req, res) => {
    const pool = new Pool(creds)
    const customers = await pool.query('SELECT * FROM customers')
        .catch(err => res.status(500).send(er))
    res.send(customers.rows)
    pool.end()
}