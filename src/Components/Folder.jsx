/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import folder from "../Images/folder.png";
import file from "../Images/file.png";
const Folder = ({ data, root, path }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-[100%] h-[80vh]  sm:h-[81%] sm:w-[70%] rounded-md border-[2px]">
        <div className="w-full h-[40px] flex justify-center items-center  border-b-2 rounded-t-sm text-[18px]">
          {root}/{path}
        </div>
        <div className="w-full h-[90%] px-3 py-2 rounded-b-md overflow-y-auto">
          {path ? (
            <h1 className="pointer px-2" onClick={() => navigate(-1)}>
              [..]
            </h1>
          ) : (
            <h1 className="pointer px-2  pointer" onClick={() => navigate(-1)}>
              Ortga
            </h1>
          )}
          {data?.map((item) => (
            <h1
              onClick={() => navigate(`?content=${item.path}`)}
              key={item.sha}
              className=" folder w-full h-[30px] flex gap-2 px-2  justify-start items-center  "
            >
              {item.type != "dir" ? (
                <img src={file} className="w-[5%] sm:w-[3%]" alt="" />
              ) : (
                <img src={folder} className="w-[5%] sm:w-[3%]" alt="" />
              )}{" "}
              {item.name}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Folder;
