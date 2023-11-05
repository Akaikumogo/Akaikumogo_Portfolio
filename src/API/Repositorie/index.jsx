import api from "../axios";

const useRepositories = () => {
  const userName = import.meta.env.VITE_USERNAME;
  const getRepoContentsByName = async (repoName) => {
    return api.get(`repos/${userName}/${repoName}/contents`);
  };
  const getRepoContents = async (repoName, path) => {
    return api.get(`repos/${userName}/${repoName}/contents/${path}?ref=master`);
  };
  const getRepoDatas = async (repoName) => {
    return api.get(`repos/${userName}/${repoName}`);
  };

  return {
    getRepoContentsByName,
    getRepoDatas,
    getRepoContents,
  };
};

export default useRepositories;
