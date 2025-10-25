import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/herosection/Hero";
import Input from "./components/herosection/Input";
import useApi from "./hooks/useApi";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const { getResponse, code, loading ,setCode} = useApi();

  const submitResponse = (e) => {
    e.preventDefault();
    getResponse(prompt);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero */}
      <main className="pt-20 pb-12 px-6">
        <Hero
          prompt={prompt}
          setPrompt={setPrompt}
          submitResponse={submitResponse}
          loading={loading}
        />
        <Input
          prompt={prompt}
          setPrompt={setPrompt}
          submitResponse={submitResponse}
          loading={loading}
        />

        {/* Toggle Buttons */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold text-white tracking-wide shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            {showPreview ? "Show Code" : "Preview"}
          </button>
        </div>

        {/* Editor / Preview Section */}
        <div className="flex justify-center mt-12">
          {showPreview ? <Preview code={code} /> : <CodeEditor code={code} setCode={setCode} />}
        </div>
      </main>

      <p className="mt-6 text-gray-400 text-center text-sm">
        Crafted with ❤️ by{" "}
        <span className="text-indigo-400 font-medium">Kriti</span>
      </p>
    </div>
  );
};

export default App;
