import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Top from "../components/Top/top.jsx";
import Dropdown from "../components/Dropdown/dropdown.jsx";
import "/Users/yumikochow/generate-tech-challenge/src/App.css";

const API_KEY = 'f3f61cda7190b47842c778ffa6c82b65';
const param = 'top_rated';

const series_id = 138502;
const recommendations = `https://api.themoviedb.org/3/tv/${series_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
const topTvShows = `https://api.themoviedb.org/3/tv/${param}?api_key=${API_KEY}&language=en-US&page=1`;

function Api() {
  const [data, setData] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [category, setCategory] = useState('Recommendations');

  useEffect(() => {
    axios.get(topTvShows)
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const url = category === 'Recommendations' ? recommendations : topTvShows;
    axios.get(url)
      .then(response => {
        setSelectOptions(response.data.results.slice(0, 5));
      })
      .catch(error => {
        console.log(error);
      });
  }, [category]);

  const firstData = data[0];
  const asideData = data.slice(1, 5);

  return (
    <div className="main-container">
      <div className="top-section">
        <Top tvShow={firstData} asideShows={asideData} />
        <Dropdown 
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {selectOptions.map((show, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
              alt={show.name}
              className="w-full h-full object-cover"
            />
            <h3 className="lg:text-left mt-2 text-center">{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Api;
