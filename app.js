const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware For Reading Requests From Body
app.use(express.json());

app.use(morgan('combined'));

app.use('/api/bounties', require('./routes/bountyRouter'));


// Starts The Server
app.listen(9000, () => {
    console.log('Server Listening on Port 9000')
});
