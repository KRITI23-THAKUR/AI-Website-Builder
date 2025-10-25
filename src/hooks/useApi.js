import { useState } from "react";
import getFinalPrompt from "../utils/getPrompt";
import { GoogleGenAI } from "@google/genai";
import extractCode from "../utils/extractCode";

const GEMINI_API_KEY = import.meta.env.VITE_API_KEY;

function useApi() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI Website Builder</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-[#0f172a] text-white flex items-center justify-center min-h-screen">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-2">🚀 Welcome to WebBuilder</h1>
          <p class="text-gray-400">Start building your dream site with AI</p>
        </div>
      </body>
    </html>`);

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async function getResponse(prompt) {
    const finalPrompt = getFinalPrompt(prompt);
    try {
      setLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: finalPrompt,
      });
      console.log(response.text);
      const html = extractCode(response.text);

      console.log(html);
      setCode(html);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { getResponse, loading, setCode, code };
}

export default useApi;
