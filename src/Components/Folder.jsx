/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const Folder = ({ data, root, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="  h-[81%] w-[70%] rounded-md border-[2px]">
        <div className="w-full h-[40px] flex justify-center items-center  border-b-2 rounded-t-sm text-[18px]">
          {root}/{path}
        </div>
        <div className="w-full h-[90%] px-3 py-2 rounded-b-md overflow-y-auto">
          {path ? (
            <h1 className="pointer px-2" onClick={() => navigate(-1)}>
              [..]
            </h1>
          ) : (
            <h1
              className="pointer px-2 border pointer"
              onClick={() => navigate(-1)}
            >
              Ortga
            </h1>
          )}
          {data?.map((item) => (
            <h1
              onClick={() => navigate(`?content=${item.path}`)}
              key={item.sha}
              className=" folder w-full h-[30px] flex  px-2  justify-start items-center  "
            >
              {item.type} {item.name}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Folder;
