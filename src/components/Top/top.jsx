import "/Users/yumikochow/generate-tech-challenge/src/App.css";
import Aside from "/Users/yumikochow/generate-tech-challenge/src/components/Aside/aside.jsx";

function Top({ tvShow, asideShows }) {
  if (!tvShow) {
    return null;
  }
  
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold my-5 text-xl">This Week's Top Picks</h2>
      <section className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
        <div className="flex flex-col relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            alt={tvShow.name}
            className="w-full h-full object-cover"
          />
            <ul className="mt-2 lg:text-left absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
              <li>{tvShow.name}</li>
              <li>A show by Vince Gilligan</li>
              <div className="flex flex-row justify-center space-x-2 mt-2 lg:justify-start">
                <li>Crime Drama</li>
                <li>ᯓ★</li>
                <li>Thriller</li>
              </div>
            </ul>
        </div>
        <Aside asideShows={asideShows} />
      </section>
    </section>
  );
}

export default Top;
