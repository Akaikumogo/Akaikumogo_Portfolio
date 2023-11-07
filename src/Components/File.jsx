/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const File = ({ data }) => {
  const navigate = useNavigate();
  const code = atob(data.content);

  const [copy, setCopy] = useState(false);

  return (
    <div className="w-[100%]   h-full sm:flex  ">
      <button
        className={
          "repo mb-[20px] sm:h-[50px]    w-[80px] py-[8px] ml-[10px] sm:ml-0 sm:w-[100px] sm:py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
        }
        onClick={() => navigate(-1)}
      >
        ortga
      </button>
      <div className="sm:w-[90vw] mr-[50px] sm:h-full w-[100vw] h-[70vh]  ">
        <div className=" sm:w-[70%] h-[35px] mx-auto rounded-t-2xl px-5 bg-[#1f1f1f] flex justify-between items-center  ">
          <h1>{data.name}</h1>
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1000);
            }}
          >
            {!copy ? "Copy code" : "Copied"}
          </button>
        </div>
        <SyntaxHighlighter
          className="h-[90%] border-x-[5px] border-b-[5px] rounded-b-2xl border-[#1f1f1f] mx-auto sm:w-[70%] overflow-auto"
          language={data.name.split(".").pop()}
          style={atomOneDark}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default File;
