import "../style/Banner.css";
import { FaPlay } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import Button from "./Button";
import { useFetchAnimeDetailsQuery, useFetchPopularAnimeQuery } from "../store";

function Banner() {
  const { data, error, isFetching } = useFetchPopularAnimeQuery();

  let content;

  if (isFetching) {
    content = (
      <div>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading
      </div>
    );
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = (
      <header
        className="banner"
        style={{
          backgroundSize: "500px 500px",
          backgroundImage: `url("${data[0].animeImg}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-contents flex flex-col mx-5 justify-center h-full p-10">
          <h1 className="banner-title my-5 text-4xl font-bold">
            {data[0].animeTitle}
          </h1>
          <h1 className="banner-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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

  return <div>{content}</div>;
}

export default Banner;
