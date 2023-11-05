import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-full flex items-center justify-center gap-6">
      <div
        onClick={() => navigate("projects")}
        className="rounded-xl black  p-5 repo transition-all duration-500 ease-in-out hover:mr-8 hover:w-[30%] mb-[100px] hover:h-[45%] w-[25%] h-[40%] "
      >
        <h1 className="text-[30px] font-semibold">Projects</h1>
        <h1 className="w-[200px]">
          Bu bo'limda Siz men ishtrok etgan loyihalar mavjud va ular haqida
          batafsil ma'lumot olishingiz mumkun
        </h1>
      </div>
      <div
        onClick={() => navigate("codes")}
        className="rounded-xl p-5 black repo transition-all duration-500 ease-in-out hover:mr-8 hover:w-[30%] mb-[100px] hover:h-[45%] w-[25%] h-[40%]"
      >
        <h1 className="text-[30px] font-semibold">Codes</h1>
        <h1 className=" w-[200px]">
          Bu bo'limda siz men bajargan loyihalarda ulashishni istagan codlarni
          ko'rishingiz mumkun{" "}
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
