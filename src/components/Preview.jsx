export default function  Preview  ({ code }) {
  return (
    <div className="flex text-center h-[80vh] w-[80vw]">
      {code ? (
        <iframe className="h-full w-full" srcDoc={code} />
      ) : (
        <div className="m-auto text-gray-500 text-lg">
          No preview available — generate a website first.
        </div>
      )}
    </div>
  );
};
