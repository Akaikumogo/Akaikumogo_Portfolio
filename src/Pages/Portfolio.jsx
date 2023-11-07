import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="  px-5 w-[85vw] h-[90vh]   flex items-center justify-center gap-6">
      <div
        onClick={() => navigate("projects")}
        className=" w-[100%]  h-[50%] p-5 sm:rounded-xl black   sm:p-5 repo transition-all duration-500 ease-in-out hover:sm:mr-8 hover:sm:w-[30%] sm:mb-[100px] hover:sm:h-[45%] sm:w-[25%] sm:h-[40%] "
      >
        <h1 className="text-[24px] font-semibold">Projects</h1>
        <h1 className=" text-[16px] sm:w-[200px]">
          Bu bo'limda Siz men ishtrok etgan loyihalar mavjud va ular haqida
          batafsil ma'lumot olishingiz mumkun
        </h1>
      </div>
      <div
        onClick={() => navigate("codes")}
        className=" w-[100%]  h-[50%] p-5 sm:rounded-xl black   sm:p-5 repo transition-all duration-500 ease-in-out hover:sm:mr-8 hover:sm:w-[30%] sm:mb-[100px] hover:sm:h-[45%] sm:w-[25%] sm:h-[40%] "
      >
        <h1 className="text-[24px] font-semibold">Codes</h1>
        <h1 className="text-[16px] sm:w-[200px]">
          Bu bo'limda siz men bajargan loyihalarda ulashishni istagan codlarni
          ko'rishingiz mumkun
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
