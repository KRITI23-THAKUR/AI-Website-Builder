import React from "react";

const Input = ({ prompt, setPrompt, submitResponse, loading }) => {
  return (
    <div className="flex flex-col items-center  my-12 px-4">
      <form
        onSubmit={submitResponse}
        className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
      >
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          ✨ Enter Your Prompt
        </h1>

        <textarea
          className="w-full h-48 p-5 text-lg text-gray-100 placeholder-gray-400 bg-gray-900/70 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300 shadow-inner"
          value={prompt}
          placeholder="Type your creative idea here..."
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-xl text-lg font-semibold tracking-wide text-white transition-all duration-300 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
          }`}
        >
          {loading ? "⏳ Generating..." : "🚀 Submit"}
        </button>
      </form>
    </div>
  );
};

export default Input;
