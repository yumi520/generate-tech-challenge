import React, { useState, useEffect, useCallback } from 'react';
import { fetchApiData } from '../api/fetchAPI.jsx';
import Top from "../components/Top/top.jsx";
import Dropdown from "../components/Dropdown/dropdown.jsx";

const SERIES_ID = 138502;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/tv';



function Api() {
  const [data, setData] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [category, setCategory] = useState('Recommendations');

  //informing the user of loading
  const [loading, setLoading] = useState(true);

  //only be recreated if the category value changes
  const getApiUrl = useCallback(() => {
    return category === 'Recommendations'
      ? `${BASE_URL}/${SERIES_ID}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      : `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  }, [category]);

  //fetching the initial data for top-rated TV shows
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const topRatedData = await fetchApiData(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      setData(topRatedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  //updating the list of selectable options based on the current category
  useEffect(() => {
    const fetchSelectOptions = async () => {
      setLoading(true);
      const url = getApiUrl();
      const fetchedOptions = await fetchApiData(url);
      setSelectOptions(fetchedOptions.slice(0, 5));
      setLoading(false);
    };
    fetchSelectOptions();
  }, [getApiUrl]);

  const firstData = data[0];
  const asideData = data.slice(1, 5);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Top tvShow={firstData} asideShows={asideData} />
      <Dropdown category={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {selectOptions.length > 0 ? (
          selectOptions.map((show, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                alt={show.name}
                className="w-full h-full object-cover"
              />
              <h3 className="lg:text-left mt-2 text-center">{show.name}</h3>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">No shows available</div>
        )}
      </div>
    </div>
  );
}

export default Api;