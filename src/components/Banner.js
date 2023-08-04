import "../style/Banner.css";
import { FaPlay } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import Button from "./Button";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://wallpaperaccess.com/full/712390.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents flex flex-col">
        <h1 className="banner-title">Title</h1>
        <div className="flex flex-row">
          <Button>
            <FaPlay />
            <h3>Play</h3>
          </Button>

          <Button>
            <GrAdd />
            <h3>My List</h3>
          </Button>
        </div>
        <h1>Text description of the movie</h1>
      </div>
    </header>
  );
}

export default Banner;
