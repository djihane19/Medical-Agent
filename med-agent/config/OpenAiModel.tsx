import OpenAI from "openai";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1", // Note: corrected to include /api/v1
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

console.log('OpenRouter API Key:', process.env.OPEN_ROUTER_API_KEY ? 'Set' : 'Missing');