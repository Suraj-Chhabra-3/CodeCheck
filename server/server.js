import app from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config();

app.listen(3000, (req, res) => {
    console.log("server is running on http://localhost:3000");
})