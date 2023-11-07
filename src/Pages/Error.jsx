import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen   bg-black flex justify-center items-center  text-white">
      <div className="error   sm:w-[1000px] sm:h-[70%] flex-col flex items-center justify-center">
        <h1 className="sm:text-[150px] text-[50px] font-semibold   ">
          404 ERROR
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-[24px] sm:text-[50px]"
        >
          Back to home :]
        </button>
      </div>
    </div>
  );
};

export default Error;
