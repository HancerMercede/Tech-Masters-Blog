import "./styles.css";
import {Loader} from "../../../utils/index.js";

const EmptyList = () => {
  return (
      <>
          <div className="emptyList-wrap">
              <p>No Results Found ...</p>
          </div>
          <Loader/>
      </>

  );
};

export default EmptyList;
