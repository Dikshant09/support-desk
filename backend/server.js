const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors');
const userRoutes = require('./routes/userRoutes.js');
const ticketRoutes = require('./routes/ticketRoutes.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');

// Connect to database
const { connectDB } = require('./config/db.js');
connectDB();

// Using middleware to get the data which is passed by user in post request : to Parse data
app.use(express.urlencoded({ extended: false }))

// Parse json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ messgage: 'Welcome to the Support Desk API' })
})

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);
app.use(errorHandler);

// Server frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
    })
}else{
    app.get('/', (req, res) => {
        res.status(200).json({ messgage: 'Welcome to the Support Desk API' })    
    })
}

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})