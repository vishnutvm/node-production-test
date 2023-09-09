const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server Working !');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
