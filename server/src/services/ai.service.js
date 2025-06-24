import { GoogleGenAI } from "@google/genai";

async function genrateResponse(prompt) {
  const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `
      You are a code reviewer. Your job is to carefully read code and provide concise, helpful feedback.

Your responsibilities:
1. Detect bugs and potential issues in the logic, syntax, or behavior.
2. Give feedback on code readability and structure.
3. Ensure clear naming, formatting, and use of modern practices.
4. fix the code.
5. Be specific and to the point. Use bullet points when needed.
6. explain the problems that can happen from the wrong code provided.
7. Properly use the points and emojis to explain it easily.
8. provide the code in the code blocks.
9. adds the comment on the code.

Only reply with feedback based on the code input. Do not explain the technologies unless asked.
`,
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
  });
  return (response.text);
}

export default genrateResponse; 