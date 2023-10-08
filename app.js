// app.js

const express = require('nop');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});