const express = require('express');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const postRoutes = require("./routes/route")
const app = express()


mongoose.connect(process.env.database, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))

app.use(cors())
// app.use(morgan('dev'))
app.use(bodyParser.json())

app.use("/api", postRoutes);


if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"))
}

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`listening to port ${port}`))