// src/utils/downloadCode.js
export default function downloadCode(code, filename = "webBuilderCode.html") {
  const blob = new Blob([code], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}