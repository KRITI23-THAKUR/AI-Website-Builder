import React from "react";

const Input = ({ prompt, setPrompt ,submitResponse,loading}) => {

  return (
    
      <form  onSubmit={submitResponse}   className="flex flex-col items-center justify-center">
        <textarea
          className="w-3xl h-44 placeholder:text-center placeholder:text-3xl border-2 placeholder:py-4"
          value={prompt}
          type="text"
          placeholder="Prompt"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button  className="border-2 p-3">{loading?"loading":"submit"}</button>
      </form>
    
  );
};

export default Input;
