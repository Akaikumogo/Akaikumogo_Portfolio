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
];

const PortfolioProjects = () => {
  return (
    <div className="w-[80%]  h-[520px] mx-auto py-10 overflow-y-auto">
      {projects.map((item) => {
        return (
          <div
            key={item.id}
            className="repo flex flex-col justify-between transition-all duration-500 ease-liner mt-[30px] rounded-xl w-[500px] h-[250px] mx-auto py-3 px-2  "
          >
            <div className="text-[24px]">{item.Title}</div>
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
                    {item} 
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProjects;
