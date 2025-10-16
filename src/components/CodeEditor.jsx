import Editor from "@monaco-editor/react";

const CodeEditor = ({code}) => {
  return (
    <Editor
      height="90vh"
      width="60vw"
      theme="vs-dark"
      defaultLanguage="html"
      value={code}
    />
  );
};

export default CodeEditor;
