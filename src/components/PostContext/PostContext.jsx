import { createContext, useState } from "react";

export const PostContext = createContext([]);

export function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}
