require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

/* user Routes */
const userRoutes = require('./routes/authRoutes');
app.use('/api/user',userRoutes)

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Is Connected..."))
    .catch((err) => console.log(err.message));
  console.log(`Server Start At Port http://localhost:${port}`);
});
