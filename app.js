const express = require('express');
const app = express();

// Middleware For Reading Requests From Body
app.use(express.json());


app.use('/bounty', require('./routes/bountyRouter'));


// Starts The Server
app.listen(3000, () => {
    console.log('Server Listening on Port 3000')
});