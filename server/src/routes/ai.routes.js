import express from 'express'
import { ai_response } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/get-review', ai_response);

export default router;