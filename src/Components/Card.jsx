import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data.name)}
      className="repo duration-700 ease-in-out transition-all  w-[100%] h-[200px] sm:w-[60%] sm:h-[40%]  rounded-2xl p-3 flex-col flex justify-between"
    >
      <h1 className="text-[24px] font-bold">{data.name}</h1>
      <div className=" sm:w-full sm:h-full sm:overflov-x-auto">
        <h1>{data.description}</h1>
      </div>
      <div className="flex justify-between w-[100%] overflow-x-auto py-[3px]">
        <h1>{data.created_at.slice(0, 10)}</h1>
        <h1>{data.is_tamplate ? "Tamplate" : "Prodject"}</h1>
        <h1>{data.visibility}</h1>
      </div>
    </div>
  );
};

export default Card;
