import Card from "./Card";
import Search from "./Search";
import Loading from "./Loading";
import {useFetchImg} from "../hooks/useFetchImg.js"

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImg();

  return (
    <>
      <Search submit={handleSubmit} />

      {loading && <Loading />}
      <div className="row mb-5" >
        {images.map((img) => {
          return (
            <div key={img.id} className="col m-2 d-flex justify-content-center">
              <Card
                img={img.urls.regular}
                names={img.user.name}
                location={img.user.location}
                bio={img.user.bio}
                className="d-flex justify-content-center"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
