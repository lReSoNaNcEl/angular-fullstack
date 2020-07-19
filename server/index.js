module.exports = () => {
    const express = require('express')
    const app = require('express')()
    const path = require('path')
    const morgan = require('morgan')

    app.listen(5000, () => {
        console.log('Server was started on 5000 port')
        app.get('/api/', (req, res) => {
            res.status(200).json({
                test: 'TEST API'
            })
        })


        app.use(morgan('dev'))
        app.use(express.static(path.join(__dirname, '..', 'client')))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'index.html'))
        })
    })
}