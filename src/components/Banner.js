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
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents flex flex-col mx-5 justify-center h-full p-10">
        <h1 className="banner-title my-5 text-4xl font-bold">Title</h1>
        <h1 className="banner-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h1>
        <div className="flex space-x-2 my-5">
          <Button>
            <FaPlay />
            <h3>Play</h3>
          </Button>

          <Button>
            <GrAdd />
            <h3>My List</h3>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
