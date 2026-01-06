import axios from "axios";

const OLLAMA_API_URL = "http://localhost:11434/api/generate";

export async function queryLLM(prompt: string, model = "llama3.1:8b") {
  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model,
      prompt,
      stream: false
    });
    return response.data?.response || "";
  } catch (err: any) {
    console.error("LLM Error:", err.message);
    return "Error: Unable to generate review.";
  }
}
