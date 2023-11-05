import { create } from "zustand";

const useRepos = create((set) => ({
  repoData: [],
  setRepoData: (data) =>
    set((state) => ({ repoData: [...state.repoData, data] })),
}));
export default useRepos;
