/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRepositories from "../API/Repositorie";
import Folder from "../Components/Folder";
import File from "../Components/File";
import { useLocation } from "react-router-dom";
import { grid } from "ldrs";

grid.register();

const Repo = () => {
  const { repo } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [repoData, setRepoData] = useState();
  const { getRepoContentsByName, getRepoContents } = useRepositories();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const content = queryParams.get("content");

  useEffect(() => {
    const fetchRepoContents = async () => {
      try {
        setIsLoading(true);
        let resData;
        if (content) {
          resData = await getRepoContents(repo, content);
        } else {
          resData = await getRepoContentsByName(repo);
        }
        setRepoData(resData.data);
      } catch (error) {
        console.error("Error fetching repository contents:", error);
      }
    };

    fetchRepoContents();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [content]);

  return (
    <div className="w-[100%] h-[100%] flex justify-center">
      {isLoading ? (
        <div className="w-[80vw] h-[90vh]  flex justify-center items-center">
          <l-grid size="150" speed="2.5" color="white"></l-grid>
        </div>
      ) : repoData?.type === "file" ? (
        <File data={repoData} path={repo + (content ? `/${content}` : "")} />
      ) : (
        <Folder
          data={repoData}
          root={repo}
          path={content ? `${content}` : ""}
        />
      )}
    </div>
  );
};

export default Repo;
