/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const File = ({ data }) => {
  const navigate = useNavigate();
  const code = atob(data.content);
  const [copy, setCopy] = useState(false);
  console.log(data.name.split(".").pop());
  return (
    <div className="w-[100%]  h-full flex  ">
      <button
        className={
          "repo w-[110px] h-[50px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
        }
        onClick={() => navigate(-1)}
      >
        ortga
      </button>
      <div className="w-full  h-full  ">
        <div className=" w-[70%] h-[35px] mx-auto rounded-t-2xl px-5 bg-[#1f1f1f] flex justify-between items-center  ">
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
          className="h-[90%] border-x-[5px] border-b-[5px] rounded-b-2xl border-[#1f1f1f] mx-auto w-[70%] overflow-auto"
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
