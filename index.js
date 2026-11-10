const express = require('express');
const connectDataBase = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

async function startServer() {
    await connectDataBase();
    app.listen(PORT, () => {
        console.log('Server running at http://localhost:${PORT}');
    });
}

startServer();