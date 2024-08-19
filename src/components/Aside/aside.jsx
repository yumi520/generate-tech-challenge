import "/Users/yumikochow/generate-tech-challenge/src/App.css";

function Aside({ asideShows }) {
  return (
    <section>
      <section className="grid grid-rows-2 grid-flow-col gap-4">
        {asideShows.map((element, index) => (
          <div key={index} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w200${element.poster_path}`}
              alt={element.original_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
              <h2 className="text-sm">{element.original_name}</h2>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Aside;