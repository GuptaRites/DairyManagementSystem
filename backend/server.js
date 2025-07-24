let express=require("express");
var mongoose = require("mongoose");

require('dotenv').config();

const port= process.env.PORT || 5000;

let app = express();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to mongodb");
}).catch((err) => console.error('MongoDB connection error :', err));

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello from MERN backend 🚀');
//   });

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
});