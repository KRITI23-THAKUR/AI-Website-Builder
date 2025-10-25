import React from "react";
import downloadCode from "../utils/downloadCode";

export default function Preview({ code }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8">
      <div className="relative w-[85vw] h-[80vh] rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <p className="text-sm text-gray-400">Live Preview</p>
          <button onClick={()=>{
            downloadCode(code)
          }}>Download</button>
          <div></div>
        </div>

        {/* Iframe */}
        <div className="flex text-center h-full w-full">
          {code ? (
            <iframe
              className="h-full w-full"
              srcDoc={code}
              title="preview"
              sandbox="allow-scripts"
            />
          ) : (
            <div className="m-auto text-gray-500 text-lg">
              🚀 No preview available — generate your site first.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
