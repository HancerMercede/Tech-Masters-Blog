import DarkMode from "../../DarkMode/DarkMode";
import "./styles.css";
const Header = () => {
  return (
    <>
      <header className="home-header">
        <h2>Tech-Master</h2>
        <DarkMode />

        {/* <h1>
        <span role="img" aria-label="wave">
          Blog
        </span> 
      </h1>/*}
      {/* <p>
        The information is power when you take action
        <br /> and if you are here you are in the right place, to learn about
        technology.
      </p> */}
      </header>
      <hr />
    </>
  );
};

export default Header;
