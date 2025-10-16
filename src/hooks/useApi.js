// import React, { useState } from "react";
// import getFinalPrompt from "../utils/getPrompt";
// import { GoogleGenAI } from "@google/genai";
// const GEMINI_API_KEY = import.meta.env.VITE_API_KEY;

// function useApi() {
//     const[loading,setLoading]=useState(false)
//   const [code, setCode] = useState(`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="p-[10px]">
//   <h1 class="text-[30px] font-[700]">Welcome to WebBuilder</h1>
// </body>
// </html>
//   `);
//   const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
//   async function getResponse(prompt) {
//     const finalPrompt = getFinalPrompt(prompt);

//     try {
//         setLoading(true)
//       const response = await ai.models.generateContent({
//         model: "gemini-2.0-flash-001",
//         contents: finalPrompt,
//       });
//       setCode(response.text)
//       setLoading(false)

//     } catch (error) {
//       console.log(error);
//       setLoading(false)
//     }
//   }
//   return { getResponse ,loading,setCode,code};
// }

// export default useApi;
import React, { useState } from "react";
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
  <title>Document</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-[10px]">
  <h1 class="text-[30px] font-[700]">Welcome to WebBuilder</h1>
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
console.log(response.text)
const html=extractCode(response.text)

console.log(html)
      setCode(html)

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { getResponse, loading, setCode, code };
}

export default useApi;
