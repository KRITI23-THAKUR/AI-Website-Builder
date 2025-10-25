// src/components/Loader.jsx
import { FadeLoader } from "react-spinners";

const Loader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <FadeLoader color="#9933ff" />
    <h3 className="text-[23px] mt-4 font-semibold">
      <span className="bg-gradient-to-br from-violet-400 to-purple-600 bg-clip-text text-transparent">
        Generating
      </span>{" "}
      your website...
    </h3>
  </div>
);

export default Loader;