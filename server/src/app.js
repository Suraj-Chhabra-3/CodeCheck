import express from 'express';
import router from './routes/ai.routes.js';
import cors from 'cors'

const app = express(); 

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Api is working sir!")
})

app.use('/ai', router)

export default app;