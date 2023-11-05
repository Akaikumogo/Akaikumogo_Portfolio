/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useRepositories from "../API/Repositorie";
import Card from "../Components/Card";
// import useRepos from "../Data/Repositories";
import { grid } from "ldrs";
import { useNavigate } from "react-router-dom";
const PortfolioCodes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repoData, setRepoData] = useState([]);
  const { getRepoDatas } = useRepositories();
  const navigate = useNavigate();
  grid.register();
  const portfolioRepos = ["Akaikumogo_Portfolio", "quizApp"];
  useEffect(() => {
    let data = [];
    portfolioRepos.map((item) => {
      getRepoDatas(item).then((res) => {
        data = [...data, res.data];
        setRepoData(data);
        console.log(res.data);
      });
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);
  return (
    <>
      <button
        className={
          "repo w-[100px] py-[10px] text-center duration-700 ease-in-out rounded-[10px] hover:bg-white hover:text-black transition-all"
        }
        onClick={() => navigate(-1)}
      >
        ortga
      </button>
      <div className="w-[80%] h-[80%] flex flex-col gap-10  mx-auto items-center  overfolx-y-auto">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <l-grid size="100" speed="1.5" color="white"></l-grid>
          </div>
        ) : (
          repoData?.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
    </>
  );
};

export default PortfolioCodes;
