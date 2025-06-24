import genrateResponse from "../services/ai.service.js";

export const ai_response = async (req, res) => {
    try {
        const code = req.body.code;
        if(!code) {
            return res.send("Write the Code!");
        }
    
        const response = await genrateResponse(code);
    
        return res.send(response);
    } catch (error) {
        res.json(error.message);
    }
}