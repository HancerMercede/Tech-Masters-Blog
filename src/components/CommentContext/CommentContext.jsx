import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CommentContext = createContext({});

export function CommentContextProvider({ children }) {
  const [commentList, setCommentList] = useState({});
  console.log(commentList);
  return (
    <CommentContext.Provider value={{ commentList, setCommentList }}>
      {children}
    </CommentContext.Provider>
  );
}

CommentContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
