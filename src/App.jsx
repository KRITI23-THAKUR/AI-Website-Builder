import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/herosection/Hero";
import Input from "./components/herosection/Input";
import useApi from "./hooks/useApi";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [showCode, setShowCode] = useState(true);
  const { getResponse, code, loading } = useApi();

  const submitResponse = (e) => {
    e.preventDefault();
    getResponse(prompt);
  };

  return (
    <div>
      <Header />
      <main className="mt-8 ">
        <Hero />
        <Input
          prompt={prompt}
          setPrompt={setPrompt}
          submitResponse={submitResponse}
          loading={loading}
        />
        <button onClick={()=>{setShowCode(!showCode)}}>
          {showCode ? "Show Code" : "Preview"}
        </button>
        {showCode ? <Preview code={code} /> : <CodeEditor code={code} />}
      </main>
    </div>
  );
};

export default App;
