import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    Title: "Quiz App",
    qatnashuvchilar: ["akaikumogo", "sarvar "],
    data: "18.09.2005",
    link: ["github.com", "sdfghjk.uz"],
    description:
      "Maktab o'quvchilari uchun online test yechish imkonini beruvhci platforma.Ko'zlangan maqsad  o'quvchilarni bilmini onlibne sinash",
  },
  {
    id: 1,
    Title: "Quiz App",
    qatnashuvchilar: ["akaikumogo", "sarvar "],
    data: "18.09.2005",
    link: ["github.com", "sdfghjk.uz"],
    description:
      "Maktab o'quvchilari uchun online test yechish imkonini beruvhci platforma.Ko'zlangan maqsad  o'quvchilarni bilmini onlibne sinash",
  },
  {
    id: 1,
    Title: "Quiz App",
    qatnashuvchilar: ["akaikumogo", "sarvar "],
    data: "18.09.2005",
    link: ["github.com", "sdfghjk.uz"],
    description:
      "Maktab o'quvchilari uchun online test yechish imkonini beruvhci platforma.Ko'zlangan maqsad  o'quvchilarni bilmini onlibne sinash",
  },
];

const PortfolioProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:w-full sm:h-full flex ">
      <button
        className={
          "repo  w-[100px]  sm:h-[50px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
        }
        onClick={() => navigate(-1)}
      >
        ortga
      </button>
      <div className="w-[100vw] h-[90vh] sm:ml-10 sm:w-[80%] flex-col flex items-center gap-2 overflow-y-auto  sm:h-[100%] mx-auto py-8 ">
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className="repo w-[80%]  h-[200px]  flex flex-col justify-between transition-all duration-500 ease-liner sm:mt-[30px] rounded-xl sm:w-[500px] sm:h-[250px] mx-auto py-3 px-2  "
            >
              <div className="text-[20px] sm:text-[24px]">{item.Title}</div>
              <div>{item.description}</div>
              <div>
                {item.qatnashuvchilar.map((item) => {
                  return item + " ";
                })}
              </div>
              <div>{item.data}</div>
              <div>
                {item.link.map((item) => {
                  return (
                    <a href={"https://" + item} key={item}>
                      {item}{" "}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioProjects;
