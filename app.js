const express = require('express');
const app = express();

// Middleware For Reading Requests From Body
app.use(express.json());


app.use('/api/bounties', require('./routes/bountyRouter'));


// Starts The Server
app.listen(9000, () => {
    console.log('Server Listening on Port 9000')
});
