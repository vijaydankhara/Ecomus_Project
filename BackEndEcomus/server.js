require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express();
const cors = require('cors')
const path = require('path')

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, 'public', 'images')));
// app.use("/images", express.static(path.join(__dirname, 'public', 'images')));


// /*----------------------------|| Admin Route ||-----------------------------------*/
const adminsroutes = require('./routes/admin/adminIndex');
app.use('/api/admin',adminsroutes)


// /*----------------------------|| Users Route ||-----------------------------------*/
const usersroutes = require('./routes/user/userIndex');
app.use('/api/user',usersroutes)



app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Is Connected..."))
    .catch((err) => console.log(err.message));
  console.log(`Server Start At Port http://localhost:${port}`);
});
