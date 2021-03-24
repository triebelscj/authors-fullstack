const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const app = express();

require('./config/config');

app.use(cors());
app.use(express.json())
app.use(urlencoded({ extended: true }))

require('./routes/routes')(app);

app.listen(8080, () => {
    console.log("This shit is working on port 8000!!!")
})