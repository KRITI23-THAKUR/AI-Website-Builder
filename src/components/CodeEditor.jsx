import React, { useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, language = "html" }) => {
  // Custom Monaco Theme Setup
  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme("ai-glow", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "", foreground: "E4E4E7", background: "00000000" },
          { token: "keyword", foreground: "C792EA" },
          { token: "string", foreground: "A3BE8C" },
          { token: "variable", foreground: "82AAFF" },
          { token: "number", foreground: "F78C6C" },
          { token: "comment", foreground: "5C6370", fontStyle: "italic" },
          { token: "function", foreground: "FFD700" },
        ],
        colors: {
          "editor.background": "#00000000", // transparent
          "editorLineNumber.foreground": "#4B5563",
          "editorCursor.foreground": "#A855F7",
          "editor.selectionBackground": "#3B0764AA",
          "editor.inactiveSelectionBackground": "#3B076440",
          "editorIndentGuide.background": "#2E2E2E",
          "editorIndentGuide.activeBackground": "#A855F7",
          "scrollbarSlider.background": "#6B728040",
          "scrollbarSlider.hoverBackground": "#A855F760",
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      {/* Editor Container */}
      <div className="relative w-[85vw] h-[80vh] rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-semibold text-gray-300">
            AI Code Editor
          </h2>
          <button className="px-3 py-1 text-xs font-medium text-gray-300 border border-gray-700 rounded-md hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200">
            Save
          </button>
        </div>

        {/* Monaco Editor */}
        <Editor
          height="calc(80vh - 40px)"
          width="100%"
          theme="ai-glow"
          defaultLanguage={language}
          value={code}
          onChange={(value) => setCode && setCode(value)}
          options={{
            fontSize: 15,
            fontFamily: "JetBrains Mono, Fira Code, monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            smoothScrolling: true,
            cursorBlinking: "expand",
            cursorSmoothCaretAnimation: true,
            automaticLayout: true,
            padding: { top: 16 },
            renderLineHighlight: "all",
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
