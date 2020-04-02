const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/dist"))

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));