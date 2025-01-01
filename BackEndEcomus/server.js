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


/* Admin Routes */
const adminRoutes = require('./routes/admin/AdminRoutes');
const productRoutes = require('./routes/admin/ProductRoutes')

app.use('/api/admin',adminRoutes)
app.use('/api/admin/product',productRoutes)

/* user Routes */
const userRoutes = require('./routes/user/userRoutes');
app.use('/api/user',userRoutes)



app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Is Connected..."))
    .catch((err) => console.log(err.message));
  console.log(`Server Start At Port http://localhost:${port}`);
});
